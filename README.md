# plotter-view-samples-angular2

Welcome to the plotter-view-samples-angular2 project, a place where you can find example views that can be plugged into the plotter platform (angular2 flavor).

## quick start

```bash
npm install http-server -g
npm install typescript -g

# in one bash shell
http-serer --cors

# in another bash shell
npm run build
```

## making a copy of this repo

1. create target repo on github

```bash

## making a copy of this repository

```bash
# crete a directory for the new copy
mkdir plotter-view-lab-angular2
cd plotter-view-lab-angular2

# clone the source repository
git clone --bare https://github.com/datumgeek/plotter-view-samples-angular2

# push the copy up the the waiting (empty) target repository
cd plotter-view-samples-angular2.git
git push --mirror https://github.com/datumgeek/plotter-view-lab-angular2.git

# delete the residue :)
cd ..
rm -rf  plotter-view-samples-angular2.git
```