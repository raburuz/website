/* LIBRARIES */
import { useMDXComponent } from 'next-contentlayer/hooks';

/* MDX COMPONENTS */
export const components = {
  h1: (props: any) => (
    <h1 className="text-4xl text-blue-100/90" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl text-blue-100/90" {...props} />
  ),
  h3: (props: any) => (
    <h2 className="text-xl text-blue-100/90" {...props} />
  ),
  p: (props: any) => (
    <p className="text-blue-100/50" {...props} />
  ),
  strong: (props: any) => (
    <strong className="text-blue-100/90 font-medium" {...props} />
  ),
  a: (props: any) => (
    <a className="text-blue-100/90 hover:opacity-80" target='_blank' rel='nofollow noreferrer noopener' {...props} />
  ),
  li: (props: any) => (
    <li className="text-blue-100/50" {...props} />
  ),
  ol: (props: any) => (
    <ol className="text-blue-100/50" {...props} />
  ),
  code: (props: any) => (
    <code
      className="w-full rounded-md px-2 py-1 font-light before:hidden after:hidden text-xs text-blue-100/50"
      {...props}
    />
  )
}

/* COMPONENT */
interface IProps {
  code: string,
}

export const MDX = ( { code }: IProps ) => {
  const Component = useMDXComponent(code);

  return (
    <div
      data-mdx-container
      className="prose max-w-none transition-all prose-headings:relative prose-headings:scroll-mt-20 prose-headings:font-display prose-headings:font-bold"
    >
      <Component
        components={{
          ...components,
        }}
      />
    </div>
  );
}
