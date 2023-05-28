import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import mockRouter from "next-router-mock";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";
import { LinkButton } from "@/Components/Elements/LinkButton";

const user = userEvent.setup();

describe("ButtonLinkのtest", () => {
  test("hrefのtest", async () => {
    mockRouter.setCurrentUrl("/");
    const href = "/usage";
    render(<LinkButton href={href} />, {
      wrapper: MemoryRouterProvider,
    });
    const router = screen.getByRole("link");
    await user.click(router);
    expect(mockRouter.asPath).toBe(href);
  });
});
