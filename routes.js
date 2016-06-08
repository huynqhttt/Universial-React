import AppComponent from './src/app';
import TopicList from './src/components/topic-list';
import Test2Component from './src/components/test2';
import Topic from './src/components/topic';
import ImageDetail from './src/components/image-detail';

const routes = {
  path: '',
  component: AppComponent,
  childRoutes: [
    {
      path: '/',
      component: TopicList
    },
    {
      path: '/test2',
      component: Test2Component,
      childRoutes: [
        {
          path: '',
        }
      ]
    },
    {
      path: '/topics/:id',
      component: Topic
    },
    {
      path: '/images/:id',
      component: ImageDetail
    }
  ]
}

export { routes };
