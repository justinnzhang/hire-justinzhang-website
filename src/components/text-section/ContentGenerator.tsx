import { ReactNode } from "react";
import { AnimateChild } from "../animation/StaggeredAnimation";

import { HeadingText, BodyText, BadgeText } from "../text-section";

interface Props {
  content: Content;
  isAnimated?: boolean;
  name: string;
}

/**
 *
 * @param ReactNode
 * @param isAnimated Used to determine whether the animation wrapper should be rendered
 * @param key a key used to ensure that React doesn't complain
 *
 * @returns [ReactNode]
 */
const AnimatedWrapper = ({
  children,
  isAnimated,
}: {
  children: ReactNode;
  isAnimated: boolean;
}) => {
  if (isAnimated) {
    return <AnimateChild>{children}</AnimateChild>;
  } else {
    return <>{children}</>;
  }
};

const TypeSelector = ({ element }: { element: ContentItem }) => {
  if (element.style === "HEADING") {
    return <HeadingText text={element.text} textEmp={element.textEmp} />;
  }

  if (element.style === "BODY") {
    return <BodyText text={element.text} textEmp={element.textEmp} />;
  }

  if (element.style === "BADGE") {
    return <BadgeText text={element.text} badgeText={element.badgeText} />;
  }

  return <></>;
};

/**
 * @description A component that takes a list of conent, then dynamically generates the heading and text sections
 *
 * @param ReactNode
 * @param isAnimated Used to determine whether the animation wrapper should be rendered
 * @param key a key used to ensure that React doesn't complain
 *
 * @returns [ReactNode]
 */

export const ContentGenerator = ({
  content,
  isAnimated = false,
  name,
}: Props) => {
  return (
    <>
      {content.map((element, index) => (
        <AnimatedWrapper isAnimated={isAnimated} key={`${name}-${index}`}>
          <TypeSelector element={element} />
        </AnimatedWrapper>
      ))}
    </>
  );
};
