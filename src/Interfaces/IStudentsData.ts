// Different API's Response fetchStudentData | fetchSchoolData | fetchLegalGuardianData
export interface IStudentsData {
  id: number;
  name: string;
  class: string;
  schoolId: number; // relation with School model
  legalGuardianId: number; // relation withLegalGuardian model
}

// Just Assuming that we are showing this information from school into the student grid table
export interface ISchoolData {
  id: number;
  name: string;
  address: string;
  contactNo: string;
}

// Just Assuming that we are this information from LegalGuardian the student grid table
export interface ILegalGuardian {
  id: number;
  name: string;
  relation: string;
  contactNo: string;
}
