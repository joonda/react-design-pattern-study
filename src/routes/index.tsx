import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from "../App.tsx";
import ContainerPresentation from "../components/container_presentation/PostListContainer.tsx";
import CustomHook from "../components/custom_hooks/PostListContainer.tsx";
import LoginForm from "../components/state_reducer/LoginForm.tsx";
import Header from "../components/data_provider/Header.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        Component: App
    },
    {
        path: '/container-presentation',
        Component: ContainerPresentation
    },
    {
        path: 'custom-hook',
        Component: CustomHook
    },
    {
        path: 'state-reducer',
        Component: LoginForm
    },
    {
        path: 'data-provider',
        Component: Header
    }
])

const ProjectRouterProvider = () => <RouterProvider router = {router} />

export default ProjectRouterProvider;