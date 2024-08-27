import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';
import Loader from '../../ui/Loader';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  const isSubmitting = fetcher.state === 'submitting';
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary" disabled={isSubmitting}>
        {isSubmitting ? 'Updating Order...' : 'Make priority'}
      </Button>
      {isSubmitting && <Loader />}
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
