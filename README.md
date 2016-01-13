nodejs-ts-bootstrap
===

Bootstrap project to make NodeJs applications with Typescript.

New project
---

- Clone this repository.

- Open the terminal and change dir to the project.

- Install basic modules for NodeJs:
    - [Typescript](http://www.typescriptlang.org/) compiler.
    - [Grunt](http://gruntjs.com/) task runner system.
    
```bash
npm install
```

- Install the TSD CLI and Grunt CLI

```bash
npm install -g tsd grunt
```
- Install basic typings for Typescript with [TSD](http://definitelytyped.org/tsd/)

```bash 
tsd install node --save
```
    
Start the developing!
---

- Open terminal, change the directory to the project, and start the Grunt task runner on terminal with:

```bash
grunt
```
    
- All changes on your code will be monitored. Grunt will compile and run it.
