import { Box, Typography } from '@mui/material';
import StudentsPicker from '../StudentsPicker/StudentsPicker';
import { useState } from 'react';
import { ISelectOption } from '../../Interfaces';
import StudentsTable from '../StudentsTable/StudentsTable';
import { useStudentContext } from '../../Context';

const StudentsData = () => {
  const studentContext = useStudentContext();
  // Selected Students Data
  const [selectedStudents, setSelectedStudents] = useState<ISelectOption[]>([]);
  // Students based on the Selected Students
  const [studentsData, setStudentsData] = useState<any[]>([]);

  const selectedStudentIds = selectedStudents.map(x => x.id);

  // This Method Will help us to Save some extra API calls
  const onStudentSelect = async (newStudents: ISelectOption[]) => {
    // Filter Students data so that no duplicate API call for Same Student on new students selections
    const filterStudentsData = newStudents.filter(x => !selectedStudentIds.includes(x.id));

    // With Above filter it will make api calls only for newly selected students
    const mappedStudentsData = await Promise.all(
      filterStudentsData.map(async student => {
        const _student = await studentContext.fetchStudentData(student.id);
        const _school = await studentContext.fetchSchoolData(_student.schoolId);
        const _legalGuardian = await studentContext.fetchLegalGuardianData(_student.legalGuardianId);
        return { ..._student, school: _school, legalGuardian: _legalGuardian };
      })
    );

    const filterGridData = studentsData
      .concat(mappedStudentsData)
      .filter(x => newStudents.map(x => x.id).includes(x.id));

    setStudentsData(filterGridData);
    setSelectedStudents(newStudents);
  };

  return (
    <Box sx={{ height: '100%', padding: '10px' }}>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5">Students Data</Typography>
        <StudentsPicker selectedStudents={selectedStudents} onStudentSelect={onStudentSelect} />
      </Box>
      <StudentsTable rows={studentsData} />
    </Box>
  );
};

export default StudentsData;
