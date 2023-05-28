import { Button } from "@/components/Elements/Button";
import { Image } from "@/components/Elements/Image";
import { cn } from "@/utils";

const sizes = {
  xs: "w-6 h-6",
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
  xl: "w-14 h-14",
};

const rounded = {
  xs: "rounded-xs",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

type AvatarProps = {
  src?: string;
  size?: keyof typeof sizes;
  isLogin?: boolean;
  isAction?: boolean;
  radius?: keyof typeof rounded;
  alt: string;
  className?: string;
} & React.HTMLAttributes<HTMLButtonElement>;

export const Avatar = ({
  src,
  size = "md",
  isLogin = false,
  isAction = false,
  className = "",
  alt,
  radius = "full",
  ...props
}: AvatarProps) => {
  const Component = isAction ? Button : "span";

  return isLogin ? (
    <Component
      className={cn(
        "inline-block items-center justify-center overflow-hidden rounded-full",
        sizes[size],
        rounded[radius],
        className
      )}
    >
      <Image alt={alt} src={src ?? ""} />
    </Component>
  ) : (
    <Component
      className={cn(
        "inline-block p-0 overflow-hidden rounded-full bg-gray-100",
        sizes[size],
        rounded[radius],
        className
      )}
      onClick={isAction ? props.onClick : undefined}
      theme="transparent"
    >
      <svg
        className="h-full w-full text-gray-300"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </Component>
  );
};
