import React from "react";
import Faq from "@/components/common/Faq";
import { faqs } from "@/data/faqs";

export default function Faqs() {
  return (
    <div className="call-action-2-text mb-50 mb-sm-40">
      <dl className="accordion">
        <Faq faqData={faqs} />
      </dl>
    </div>
  );
}
