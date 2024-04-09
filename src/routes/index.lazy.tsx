// eslint-disable-line unicorn/filename-case
import {createLazyFileRoute} from '@tanstack/react-router';
import App from '../App';

export const Route = createLazyFileRoute('/')({
  component: App,
});

// Function Index() {
//   return (
//     <div className="p-2">
//       <h3>Welcome Home!</h3>
//     </div>
//   );
// }
