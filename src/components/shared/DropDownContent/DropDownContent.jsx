import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
const DropDownContent = () => {
  return (
    <DropdownMenuContent className="w-64 bg-base-100 font-inter ">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem className="p-0">
          <Link
            to={`/dashboard/profile`}
            className="flex items-center gap-2 w-full py-2 px-3"
          >
            <BiUser className="text-2xl" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  );
};

export default DropDownContent;
