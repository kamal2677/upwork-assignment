const apiBaseUrl = 'http://localhost:3001';

// This File Contain the Mock of the API server Response
// mock server you can see at mockServer\mock-server.js
// Note: While Make this End points I am Assuming that
// We have no control over the API server and make it cose to that server
export const fetchStudentsOptions = async () => {
  try {
    const response = await fetch(`${apiBaseUrl}/students/options`);
    return await response.json();
  } catch (error) {
    return [];
  }
};

export const fetchStudentData = async (studentId: number) => {
  try {
    const response = await fetch(`${apiBaseUrl}/students/${studentId}`);
    return await response.json();
  } catch (error) {
    return [];
  }
};

export const fetchSchoolData = async (schoolId: number) => {
  try {
    const response = await fetch(`${apiBaseUrl}/schools/${schoolId}`);
    return await response.json();
  } catch (error) {
    return [];
  }
};
export const fetchLegalGuardianData = async (guardianId: number) => {
  try {
    const response = await fetch(`${apiBaseUrl}/guardians/${guardianId}`);
    return await response.json();
  } catch (error) {
    return [];
  }
};
