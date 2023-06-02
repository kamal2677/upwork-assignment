
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


#### Approach : In this approach we have optimized the code as user cases
i.e.
1. In current code if we select any student then there was no filter available to fetch only newly selected data it's fixed and now it will not make any extra APi calls.

2. There can be multiple students from same school so if school data is already available then no need to load it again

3. Same there can be multiple students from same legal Guardian so if the legal guardian data is available then no need to load it again from API.


#### How To Test Logic :
case 1:
First Select Student 3
it will make the 3 API calls for student & school & legal guardian

Now Select Student 5 (This is in same school and legal Guardian)
it will make only one API call to get student data only

case 2:
Select Unselect Same student
it will not make any further API calls to get data if we are selecting and unselecting the students
