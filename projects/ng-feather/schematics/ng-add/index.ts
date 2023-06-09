/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { workspaces } from '@angular-devkit/core';
import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
// import { getAppModulePath } from '@schematics/angular/utility/ng-ast-utils';
import { addModuleImportToRootModule, addPackageToPackageJson } from '../utils';
// import { hasNgModuleImport } from '../utils/ng-module-imports';
// import { getProjectMainFile } from '../utils/project-main-file';
// import { Schema } from './schema';
import { addStyles } from '../utils/addStyles';
import { getDependencies } from '../utils/getVersions';
import { getWorkspace } from '@schematics/angular/utility/workspace';
// const datepickerComponentName = 'datepicker';
// const bsName = 'ngFeather';
const BOOTSTRAP_AVAILABLE_STYLES = {
  'css': [`./node_modules/bootstrap/dist/css/bootstrap.min.css`],
  'scss': [`
/* Importing Bootstrap SCSS file. */
@import "./node_modules/bootstrap/scss/bootstrap";
`]
};

export default function addBsToPackage(options: any): Rule {
  // const componentName = options.component
  //   ? options.component
  //   : options['--'] && options['--'][1];
  

  return async (tree: Tree, context: SchematicContext) => {
    const workspace = await getWorkspace(tree);
    const projectName = options.project || (workspace.extensions['defaultProject']?.toString() ?? '');
    const project = workspace.projects.get(projectName);
    addPackageJsonDependencies(tree, context);
    insertBootstrapStyles(project, tree, projectName, options.stylesExtension);
    
    context.addTask(new NodePackageInstallTask());
    // if (componentName) {
    //   addModuleOfComponent(project, tree, context, componentName);
    // }

    addAnimationModule(project, tree);
  };
}

// function addModuleOfComponent(project: workspaces.ProjectDefinition, host: Tree, context: SchematicContext, componentName: string): Rule {
//   if (!project) {
//     return;
//   }

//   const appModulePath = getAppModulePath(host, getProjectMainFile(project));
//   if (componentName && components[componentName]) {
//     if (hasNgModuleImport(host, appModulePath, components[componentName].moduleName)) {
//       context.logger.warn(`Could not set up ${components[componentName].moduleName} because it already imported.`);
//       return;
//     }
//     addModuleImportToRootModule(
//       host, `${components[componentName].moduleName}.forRoot()`, components[componentName].link, project
//     );
//   }
// }

function addPackageJsonDependencies(host: Tree, context: SchematicContext): Tree {
  const dependencies = getDependencies();
  dependencies.forEach(dependency => {
    addPackageToPackageJson(host, dependency.name, `${dependency.version}`);
    context.logger.log('info', `✅️ Added "${dependency.name}`);
  });
  return host;
}

function insertBootstrapStyles(project: workspaces.ProjectDefinition | undefined, host: Tree, projectName: string, extension?: string ): Tree {
  if (project) {
    return addStyles(project, 'build', host, BOOTSTRAP_AVAILABLE_STYLES, projectName, extension);
  }  
 return host;
}

function addAnimationModule(project: workspaces.ProjectDefinition | undefined, host: Tree): Rule {
  // if (!project || !(!componentName || components[componentName]?.animated)) {
  //   return;
  // }
  if(project) {
    addModuleImportToRootModule(host, 'BrowserAnimationsModule', '@angular/platform-browser/animations', project);
  }
  return () => {};
}