import {
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import { LoginPage } from "@/pages/LoginPage";
import { ProjectPage } from "@/pages/ProjectPage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { RegisterPage } from "@/pages/RegisterPage";
import { SectionPage } from "@/pages/SectionPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/projects" replace />,
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/projects",
    element: <ProjectsPage />
  },
  {
    path: "/projects/:projectId",
    element: <ProjectPage />
  },
  {
    path: "/projects/:projectId/sections/:sectionId",
    element: <SectionPage />
  },
  {
    path: "*",
    element: <Navigate to="/projects" replace />
  }
])
