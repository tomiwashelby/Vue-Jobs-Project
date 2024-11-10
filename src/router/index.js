import { createRouter, createWebHistory } from "vue-router";
import homeView from '@/views/homeView.vue';
import jobsView from "@/views/jobsView.vue";
import NotFound from "@/views/notFound.vue";
import jobView from "@/views/jobView.vue";
import addJobView from "@/views/addJobView.vue";
import EditJobView from "@/views/editJobView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: homeView,
		},
		{
			path: '/jobs',
			name: 'jobs',
			component: jobsView,
		},
		{
			path: '/jobs/:id',
			name: 'job',
			component: jobView,
		},
		{
			path: '/jobs/add',
			name: 'add-job',
			component: addJobView,
		},
		{
			path: '/jobs/edit/:id',
			name: 'edit-job',
			component: EditJobView,
		},
		{
			path: '/:catchAll(.*)',
			name: 'not-found',
			component: NotFound,
		}
	],
});

export default router;