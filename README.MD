### **To run tests:**
* Clone repository
```
Go to your project folder
git clone https://github.com/dannywhy/MLH
```
* Run `npm install`
* Run `npm test`

### **To create Pull Request:**
* Make sure you are on master branch
* Check your local master branch is up to date
```
git pull
```
* Pick up/create a JIRA task
* Create the branch with the name = JIRA task id (for example, MLH-223)
```
git branch MLH-223
```
* Check out the branch
```
git checkout MLH-223
```
* Change/create files you were suppose to (according to your JIRA task)
* Add changes to git
```
git add .
```
* Commit your changes
```
git commit -m "MLH-223 changed these files"
```
* Push your changes to the remote branch with the same name
```
git push -u origin MLH-223
```
* Go to GitHub (you will have the link if you work from terminal)
* Create a Pull Request (from MLH-223 -> master)
* Assign reviewers