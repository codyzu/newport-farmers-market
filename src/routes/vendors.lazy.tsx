// eslint-disable-line unicorn/filename-case
import {createLazyFileRoute} from '@tanstack/react-router';
import Vendors from '../Vendors';

export const Route = createLazyFileRoute('/vendors')({
  component: Vendors,
});
