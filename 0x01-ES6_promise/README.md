# 0x01. ES6 Promises

## Resources

**Read or watch**:

- [Promise]()
- [JavaScript Promise: An introduction]()
- [Await]()
- [Async]()
- [Throw / Try]()

## Learining Objectives

At the end of this Project, you are expected to be able to [expalin to anyone]() without the help of Google:

- Promise (how, why and what)
- How to use the _then_, _resolve_, _catch_ methods
- How to use every method of the Promise obejct
- Throw / Try
- The await operator
- How to usee an _aync_ function

## Requirements

- All your files will be executed on Ubuntu 18.or LTS using NodeJS 12.11.x
- Allowed editors: _vi_, _vim_, emacs*, \_Visual Studio Code*
- All your files should end with a new line
- A _Readme.md_ file, at the root of the folder of the project, is mandatory
- Your code will be tested using _Jest_ and the command _npm run test_
- Your code will be Verified against lint using ESlint
- All of your functions must be exported

## Resposne Data Format

_uploadPhoto_ returns a response with the format

```Json
{
    staus: 200,
    body: 'photo-profile-1',
}
```

_createUser_ returns a response with the format

```Json
{
    firstName: 'Guillaume',
    lastName: 'Salva'
}
```

## Tasks

0. Kepp every promise you mae and only make promises you can keep

Return a promise using this prototype _function getResponseFormAPI()_

- File: _0-promise.js_
