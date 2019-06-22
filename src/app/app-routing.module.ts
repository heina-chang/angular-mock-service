import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PreloadModulesStrategy} from './core/strategies/preload-modules.strategy';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'homework', loadChildren: './homework/homework.module#HomeworkModule' },
  { path: 'students', loadChildren: './students/students.module#StudentsModule' },
  { path: 'student', loadChildren: './student/student.module#StudentModule' },
  // { path: 'lesson', loadChildren: './lesson/lesson.module#LessonModule' },
  { path: 'teacher', loadChildren: './teacher/teacher.module#TeacherModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterModule' },
  { path: '**', pathMatch: 'full', redirectTo: '/students' } // catch any unfound routes and redirect to home page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadModulesStrategy })],
  exports: [RouterModule],
  providers: [PreloadModulesStrategy]
})
export class AppRoutingModule { }
