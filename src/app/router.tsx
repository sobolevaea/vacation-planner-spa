import { createBrowserRouter } from "react-router-dom";
import VacationFormPage from "../pages/vacation-form/VacationFormPage";
import VacationPlanPage from "../pages/vacation-plan/VacationPlanPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <VacationFormPage />
  },
  {
    path: '/vacation-plan',
    element: <VacationPlanPage />
  },
])