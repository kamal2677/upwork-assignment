import { useEffect, useState } from 'react';
import { MultiSelectInputControl } from '../UIControls';
import { useLoader } from '../../Hooks';
import { ISelectOption } from '../../Interfaces';
import { apiDataService } from '../../Context';

type Props = {
  selectedStudents: ISelectOption[];
  onStudentSelect: (students: ISelectOption[]) => void;
};

// Component to select Students
const StudentsPicker = (props: Props) => {
  const loader = useLoader();
  // Students Data to display in options
  const [students, setStudents] = useState<ISelectOption[]>([]);

  useEffect(() => {
    loadOptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loadOptions() {
    loader.showLoader();
    const data = await apiDataService.fetchStudentsOptions();
    loader.hideLoader();
    setStudents(data);
  }

  return (
    <MultiSelectInputControl
      options={students}
      label="Select Students"
      value={props.selectedStudents}
      onSelect={props.onStudentSelect}
    />
  );
};

export default StudentsPicker;
