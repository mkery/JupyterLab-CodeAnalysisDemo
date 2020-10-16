# JupyterLab Code Analysis Demo
A demo JupyterLab Extension for the _programatic_ reading and writing of user code in Jupyter notebooks 4 code analysis fun

### Install Instructions
 
The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Move to codegen directory

# Install dependencies
jlpm
# Build Typescript source
jlpm build
# Link your development version of the extension with JupyterLab
jupyter labextension install .
# Rebuild Typescript source after making changes
jlpm build
# Rebuild JupyterLab after making any changes
jupyter lab build
```
### The running extension looks like this:
![Image of codegen extension](https://github.com/mkery/JupyterLab-CodeGen/blob/main/screenshot.png#1)

#### Missing functionality that would be useful to demo? Let us know in issues or contribute! :D
