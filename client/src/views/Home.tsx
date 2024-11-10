import { LongFacts } from "../components/LongFacts";
import { ShortFacts } from "../components/ShortFacts";
import { RowWrapper } from "../components/styled/Wrappers";

export const Home = () => {
  return (
    <>
      <RowWrapper>
        <div>
          <img
            src="public/cecilia.jpg"
            alt="Kvinna med blommig klänning"
            loading="lazy"
            width={150}
            height={200}
          />
        </div>
        <div>
          <ShortFacts></ShortFacts>
          <LongFacts></LongFacts>
        </div>
      </RowWrapper>
    </>
  );
};
