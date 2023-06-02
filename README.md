
## How to Run Locally

Clone the project

```bash
  git clone https://github.com/kamal2677/upwork-assignment.git
```

Go to the project directory

```bash
  cd upwork-assignment
```

Install dependencies

```bash
  yarn install
```

## Start API Mock Server
#### We have used the node js mock server to simulate the real API user cases.
Run command to start API server
```bash
  yarn mock-server
```

After running API end point can be assed at 
```bash
  http://localhost:3001

```

## Start React app

Run command
```bash
  yarn start
```

Open this port in browser
```bash
  http://localhost:3000
```

Home Page Preview
![alt text](https://github.com/kamal2677/upwork-assignment/blob/main/Images/dashboard.PNG?raw=true)

#### Approach : 
We have optimized the code as per the below user cases  i.e.
- In current code if we select any student then there was no filter available to fetch only newly selected data it's fixed and now it will not make any extra API calls.
- There can be multiple students from same school so if school data is already available then no need to load it again.
- Same there can be multiple students from same legal Guardian so if the legal guardian data is available then no need to load it again from API.

#### How To Test Logic :
- First select student 3 it will make the 3 API calls for student & school & legal guardian.
- Now select student 5 (This is in same school and legal Guardian) it will make only one API call to get student data only.
- Unselect student 5 and select it again in this case it will not make another API calls to get data for student 5 as we already has data for student 5.
