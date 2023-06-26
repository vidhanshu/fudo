import NavFootLayout from "@/src/common/components/NavFootLayout";

const Menu = () => {
  return <div>Menu</div>;
};

export default Menu;

Menu.getLayout = function (page: React.ReactElement) {
  return <NavFootLayout>{page}</NavFootLayout>;
};
