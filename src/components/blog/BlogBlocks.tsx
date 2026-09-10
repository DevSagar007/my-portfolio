import type { BlogBlock } from '@/types/blog';

interface BlogBlocksProps {
  blocks: BlogBlock[];
}

/** Renders a post body using the same markup the static page used per block. */
export default function BlogBlocks({ blocks }: BlogBlocksProps) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'text':
            return (
              <div className={block.className} key={index}>
                {block.lead ? (
                  <div className="d-flex align-items-center mb-20">
                    <span className="fz-60 fw-500 main-color line-height-1 mr-10">
                      {block.lead.dropCap}
                    </span>
                    <p>{block.lead.text}</p>
                  </div>
                ) : null}
                {block.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
              </div>
            );

          case 'title':
            return (
              <div className={block.className} key={index}>
                <h5 className="fw-500">{block.text}</h5>
              </div>
            );

          case 'quote':
            return (
              <div className={block.className} key={index}>
                <h6 className="line-height-28 fz-20">
                  <span className="l-block">{block.text}</span>
                  <span className="sub-title main-color mt-20 mb-0"> {block.author}</span>
                </h6>
              </div>
            );

          case 'imagePair':
            return (
              <div className={block.className} key={index}>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="iner-img sm-mb30">
                      <img src={block.images[0]} alt="" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="iner-img">
                      <img src={block.images[1]} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            );

          case 'list':
            return (
              <div className={block.className} key={index}>
                <h6 className="mb-10">{block.heading}</h6>
                <ul className="rest">
                  {block.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {block.ordered ? (
                        <>
                          <span>{`${String(itemIndex + 1).padStart(2, '0')} -`}</span> {item}
                        </>
                      ) : (
                        item
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );

          default:
            return null;
        }
      })}
    </>
  );
}
