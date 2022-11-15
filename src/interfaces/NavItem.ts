export default interface NavItem {
  name: string;
  icon?: JSX.Element;
  url?: string;
  children?: NavItem[];
}
