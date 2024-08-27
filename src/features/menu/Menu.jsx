import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';
import { useSelector } from 'react-redux';
import LinkButton from '../../ui/LinkButton';
function Menu() {
  const menu = useLoaderData();
  const isUser = useSelector((store) => store.user.username);
  if (!isUser)
    return (
      <LinkButton to="/">
        <div className="text-xl font-semibold text-stone-400">
          Please start by telling us your name.😛
        </div>
        &larr; Go back
      </LinkButton>
    );
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}
export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
