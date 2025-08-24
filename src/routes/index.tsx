import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from "../App.tsx";
import ContainerPresentation from "../components/container_presentation/PostListContainer.tsx";
import CustomHook from "../components/custom_hooks/PostListContainer.tsx";

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
    }
])

const ProjectRouterProvider = () => <RouterProvider router = {router} />

export default ProjectRouterProvider;