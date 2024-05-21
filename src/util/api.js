const baseUrl = 'http://127.0.0.1:8000/api/';

export async function login(formData) {
    const response = await fetch(baseUrl + 'user/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    });
  
    if (!response.ok) {
      const error = new Error('Sorry, something went wrong!');
      error.code = response.status;
      const errorData = await response.json(); // Parse error response
      const errorMessage = errorData.message; // Assuming the server sends error message under 'message'
      throw error;
    }
  
    const data = await response.json();
    return data.token;
  }
  
  // Fetch user data
  export async function fetchUserData() {
  // check if we have token
    const token = localStorage.getItem('Token');
    if (!token) {
      throw new Error('Token not found');
    }
  
    const response = await fetch(baseUrl + 'user/me/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    });
  
    if (!response.ok) {
      const error = new Error('Sorry, something went wrong!');
      error.code = response.status;
      const errorData = await response.json(); // Parse error response
      error.info = errorData.message; // Assuming the server sends error message under 'message'
      throw error;
    }
  
    const data = await response.json();
    return data;
  }

  //create user
  export async function createUser(formData) {
    const response = await fetch(baseUrl + 'user/create/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    });
  
    if (!response.ok) {
      const error = new Error('Sorry, something went wrong!');
      error.code = response.status;
      const errorData = await response.json(); // Parse error response
      const errorMessage = errorData.message; // Assuming the server sends error message under 'message'
      throw error;
    }
  
    const data = await response.json();
    return data;
  } 


  // get all academic activities
export async function fetchAcademicActivities() {
    const response = await fetch(baseUrl + 'academicactivities/academicactivities/');
  
    if (!response.ok) {
      const error = new Error('Sorry, something went wrong!');
      error.code = response.status;
      const errorData = await response.json(); // Parse error response
      error.info = errorData.message; // Assuming the server sends error message under 'message'
      throw errorData;
    }
  
    const data = await response.json();
    return data;
  }

  // insert academic activity
  // does not need token
  export async function insertAcademicActivity(formData) {
    const response = await fetch(baseUrl + 'academicactivities/academicactivities/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    });
  
    if (!response.ok) {
      const error = new Error('Sorry, something went wrong!');
      error.code = response.status;
      const errorData = await response.json(); // Parse error response
      const errorMessage = errorData.message; // Assuming the server sends error message under 'message'
      throw error;
    }
  
    const data = await response.json();
    return data;
  }

  // insert image for academicactivities
  // does not need token
  // we have to pass the id of the academic activity
  export async function insertImageAcademic(formData, id) {
    const response = await fetch(baseUrl + `academicactivities/academicactivities/${id}/upload-image/`, {
      method: 'POST',
      body: formData,
    });
  
    if (!response.ok) {
      const error = new Error('Sorry, something went wrong!');
      error.code = response.status;
      const errorData = await response.json(); // Parse error response
      const errorMessage = errorData.message; // Assuming the server sends error message under 'message'
      throw error;
    }
  
    const data = await response.json();
    return data;
  }


  // get all programmes
export async function fetchProgrammes() {
    const response = await fetch(baseUrl + 'programme/programmes/');
  
    if (!response.ok) {
      const error = new Error('Sorry, something went wrong!');
      error.code = response.status;
      const errorData = await response.json(); // Parse error response
      error.info = errorData.message; // Assuming the server sends error message under 'message'
      throw error;
    }
  
    const data = await response.json();
    return data;
  }

  // insert programme
  // does not need token
  export async function insertProgramme(formData) {
    const response = await fetch(baseUrl + 'programme/programmes/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    });
  
    if (!response.ok) {
      const error = new Error('Sorry, something went wrong!');
      error.code = response.status;
      const errorData = await response.json(); // Parse error response
      const errorMessage = errorData.message; // Assuming the server sends error message under 'message'
      throw error;
    }
  
    const data = await response.json();
    return data;
  }

  // insert image for programme
  // does not need token
  // we have to pass the id of the programme
  export async function insertProgrammeImage(formData, id) {
    const response = await fetch(baseUrl + `programme/programmes/${id}/upload-image/`, {
      method: 'POST',
      body: formData,
    });
  
    if (!response.ok) {
      const error = new Error('Sorry, something went wrong!');
      error.code = response.status;
      const errorData = await response.json(); // Parse error response
      const errorMessage = errorData.message; // Assuming the server sends error message under 'message'
      throw error;
    }
  
    const data = await response.json();
    return data;
  }


  // get school
export async function fetchSchools() {
    const response = await fetch(baseUrl + 'school/school/');
  
    if (!response.ok) {
      const error = new Error('Sorry, something went wrong!');
      error.code = response.status;
      const errorData = await response.json(); // Parse error response
      error.info = errorData.message; // Assuming the server sends error message under 'message'
      throw error;
    }
  
    const data = await response.json();
    return data;
  }

// get school by id
export async function fetchSchoolById(id) {
    const response = await fetch(baseUrl + `school/school/${id}/`);
  
    if (!response.ok) {
      const error = new Error('Sorry, something went wrong!');
      error.code = response.status;
      const errorData = await response.json(); // Parse error response
      error.info = errorData.message; // Assuming the server sends error message under 'message'
      throw error;
    }
  
    const data = await response.json();
    return data;
  }

  // patch school
  // does not need token
  export async function patchSchool(formData, id) {
    const response = await fetch(baseUrl + `school/school/${id}/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    });
  
    if (!response.ok) {
      const error = new Error('Sorry, something went wrong!');
      error.code = response.status;
      const errorData = await response.json(); // Parse error response
      const errorMessage = errorData.message; // Assuming the server sends error message under 'message'
      throw error;
    }
  
    const data = await response.json();
    return data;
  }