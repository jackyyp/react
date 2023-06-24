import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    { id: "jk3b5", label: "label1", content: "content1" },
    { id: "fih6c", label: "label2", content: "content2" },
    { id: "36b1k", label: "label3", content: "content3" },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
