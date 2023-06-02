import React, { useState } from 'react';
import { useContext } from 'react';
import { apiDataService } from '../Context';
import { IStudentsData, ISchoolData, ILegalGuardian } from '../Interfaces';

type ContextTypes = {
  studentsList: IStudentsData[];
  schoolsList: ISchoolData[];
  legalGuardiansList: ILegalGuardian[];
  fetchStudentData: (id: number) => Promise<IStudentsData>;
  fetchSchoolData: (id: number) => Promise<ISchoolData>;
  fetchLegalGuardianData: (id: number) => Promise<ILegalGuardian>;
};

// We are creating shared context to manage the repeated calls
// Initial State of the Context
const StudentsContext = React.createContext<ContextTypes>({
  studentsList: [],
  schoolsList: [],
  legalGuardiansList: [],
  fetchStudentData: (id: number) => ({} as Promise<IStudentsData>),
  fetchSchoolData: (id: number) => ({} as Promise<ISchoolData>),
  fetchLegalGuardianData: (id: number) => ({} as Promise<ILegalGuardian>),
});

type Props = {
  children?: React.ReactNode;
};

// make Promise of the local data
const makePromise = (data: any) => new Promise((resolve, reject) => resolve(data));

// This Context is used as the Middle man between the API endpoints and the UI Components
// We can do same thing with MOBX or Redux or any other state management library
export const StudentsContextProvider = ({ children }: Props) => {
  // This State lists Will work as catch system for our Data Grid Component
  const [studentsList, setStudentsList] = useState<IStudentsData[]>([]);
  const [schoolsList, setSchoolsList] = useState<ISchoolData[]>([]);
  const [legalGuardiansList, setLegalGuardiansList] = useState<ILegalGuardian[]>([]);

  // Note: This approach is used if we can fetch only one record at a time else we can fetch all Students in one API call
  const fetchStudentData = async (id: number) => {
    const studentExist = studentsList.find(x => x.id === id);
    // If Student Already exist in Local state then no need to make another API call
    if (studentExist) {
      return makePromise(studentExist);
    }
    const data = await apiDataService.fetchStudentData(id);
    setStudentsList(studentsList.concat(data));
    return data;
  };

  // Note: This approach is used if we can fetch only one record at a time else we can fetch all Schools in one API call
  const fetchSchoolData = async (id: number) => {
    const schoolExist = schoolsList.find(x => x.id === id);
    // This Will help to save API call in case if we have multiple students from same school then
    if (schoolExist) {
      return makePromise(schoolExist);
    }
    const data = await apiDataService.fetchSchoolData(id);
    setSchoolsList(schoolsList.concat(data));
    return data;
  };

  // Note: This approach is used if we can fetch only one record at a time else we can fetch all Guardians in one API call
  const fetchLegalGuardianData = async (id: number) => {
    const guardianExist = legalGuardiansList.find(x => x.id === id);
    // This Will help to save API call in case if we have multiple students from same guardian i.e brothers or sisters
    if (guardianExist) {
      return makePromise(guardianExist);
    }
    const data = await apiDataService.fetchLegalGuardianData(id);
    setLegalGuardiansList(legalGuardiansList.concat(data));
    return data;
  };

  return (
    <StudentsContext.Provider
      value={{
        studentsList,
        schoolsList,
        legalGuardiansList,
        fetchStudentData,
        fetchSchoolData,
        fetchLegalGuardianData,
      }}
    >
      {children}
    </StudentsContext.Provider>
  );
};

export const useStudentContext = () => useContext(StudentsContext);
