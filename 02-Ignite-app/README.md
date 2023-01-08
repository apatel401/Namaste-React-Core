# Ignite Our App - Chapter 2 - Theory

**1. What is `NPM`?**
```
NPM is software library/registry and package manager. npm is used to install dependencies in project or manage it.
```

**2. What is `Parcel/Webpack`? Why do we need it?**
```
Parcel & webpack both are bundlers but perform various task other than bundling. like Hot module reload, minifieng js, cleaning codes, optimize media files, tree shaking, file watcher and more.
```

**3. What is `.parcel-cache`**

```
Parcel create this .parcel-cache folder to store some data on local machine which can be used to perform some of its action
```
**4. What is `npx` ?**

```
Node Package Execute

It is an npm package runner that can execute any package that you want from the npm registry without even installing that package
```

**5. What is difference between `dependencies` vs `devDependencies`**

```
dependencies consist of package that we will need to run the app or used in the app wheareas devDependencies are packages used by developers during production which won't be useful to actually run the app
```

**6.  What is Tree Shaking?**

```
Tree shaking ignores all unwanted or unused code so that the production files are more cleaner and preformant 
```

**7. What is Hot Module Replacement?**

```
Hot Module reload keeps track of all of our files in the repo and reloads the server when any of the file content changes and HMR follows file Watcher algoritham to keep track of changes. Bundlers like Parcel, webpack and vite comes with hot module reloading.
```

**8. List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.**

```
1. Hot Module Reloading
2. Tree Shaking
3. minify the code
4. Zero config
5. HTTPS on Dev

My two of three favourites are Tree Shaking and Hot module reloading. Look for Q-6 and 7 for description. And third I like about parcel is its zero config bundler. For begginer it's best to use bundles like Parcel where they don't have to worry about configuring while learning new front end framework or library.
```

**9. What is `.gitignore`? What should we add and not add into it?**
```
.gitignore is file where we add file and folder names and pattern of files name that we don't want on our repo(git) or on production. we should add folder like node_modules, .parcel-cache, .env and more which we don't want on our cloud server/ repo on cloud
```
**10. What is the difference between `package.json` and `package-lock.json`**
```
package.json consist of dependencies and devDependecies packages and it's version number used in App, entry point for app, script excution needed for app development and build. it also includes all app infor like name, version, author etc. 

package-lock.json describes the exact tree that was generated to allow subsequent installs to have the identical tree. It allows future devs to install the same dependencies in the project. It contains the name, dependencies, and locked version of the project. 
```
**11. Why should I not modify `package-lock.json`?**
```
Main purpose of package-lock.json is to lock the version number needed for app to run and if we modify it then its like doing the exact opposite of package-lock.json's purpose and it might break your app or it might not able to install the package. That's why you should never modify it.
```
**12. What is `node_modules` ? Is it a good idea to push that on git?**
```
Node_modules is consist of dependencies and devDependencies modules needed to run the app. Never ever push your node_modules into your git. because its too big in size and it will took up lot of space of your git.
```
**13. What is the `dist` folder?**
```
dist folder is used to store the build files rewuire to run app.
```
**14. What is `browserlists`?**
```
browserlist is package used to instruct our bundler to support n number of browsers and it's version. Its like configuration for our app to run on certain versions of browsers. browserlist configuration can be inserted into package.json file which expects array of string. find configuration from here [browsrslist.dev](https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z)
```