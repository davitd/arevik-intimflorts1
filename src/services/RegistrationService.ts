export default class RegistrationService {
  baseUrl: string;
  constructor() {
    this.baseUrl = 'https://iconnect247.net/api/v2';
  }

  async start(username?: string, email?: string) {
    const url = `${this.baseUrl}/registration/start`;
    const result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...(username ? { username } : {}),
        ...(email ? { email } : {}),
        site_key: 'no01',
      }),
    }).then((response) => {
      return response.json();
    });
    if (result.Status === 'ok') {
      localStorage.setItem('userId', result.Data);
    }
    return result;
  }

  async registration(
    username?: string,
    email?: string,
    DOB?: string,
    gender?: string,
    date_type?: string,
    password?: string,
    location?: string,
    looking_for?: string
  ) {
    if (!username && !email) {
      return 'Please enter a username or email';
    }
    let userId;
    if (!localStorage.getItem('userId')) {
      const result = await this.start(username, email);
      if (result.Status === 'fail') {
        return result;
      }
      userId = result.Data;
    } else {
      userId = localStorage.getItem('userId');
    }
    const url = `${this.baseUrl}/registration/${userId}`;
    if (localStorage.getItem('missing_fields')?.length) {
      const missingFields = (
        localStorage.getItem('missing_fields') || ''
      ).split(',');
      let requestBody: any = {};
      missingFields.forEach((field: string) => {
        if (field === 'DOB') {
          requestBody.DOB = DOB;
        } else if (field === 'gender') {
          requestBody.gender = gender;
        } else if (field === 'password') {
          requestBody.password = password;
        } else if (field === 'looking_for') {
          requestBody.looking_for = looking_for;
        } else if (field === 'location') {
          requestBody.location = location;
        } else if (field === 'date_type') {
          requestBody.date_type = date_type;
        }
      });
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...requestBody,
          site_key: 'no01',
        }),
      }).then((response) => {
        return response.json();
      });
    } else {
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...(DOB ? { DOB } : {}),
          ...(gender ? { gender } : {}),
          ...(password ? { password } : {}),
          ...(looking_for ? { looking_for } : {}),
          ...(location ? { location } : {}),
          ...(date_type ? { date_type } : {}),
          site_key: 'no01',
        }),
      }).then((response) => {
        return response.json();
      });
    }
  }
  async location(search: string) {
    const url = `${this.baseUrl}/registration/locations?search=${search}&site_key=no01&skip=10`;
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      return response.json();
    });
  }
}
