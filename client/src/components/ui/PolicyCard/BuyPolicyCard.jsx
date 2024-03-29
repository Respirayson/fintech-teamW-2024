import React, { useState } from "react";
import "./policy-card.css";
import BuyModal from "../Modal/BuyModal";

const BuyPolicyCard = ({
  policyId,
  publicAddressOwner,
  publicAddressAgent,
  issuerName,
  policyName,
  policyType,
  premium,
  startDate,
  maturityDate,
  timeCreated,
  description,
  type
  }) => {
    
  function formatDate(date) {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = String(newDate.getMonth() + 1).padStart(2, '0');
    const day = String(newDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }
  
  function formatDateTime(date) {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = String(newDate.getMonth() + 1).padStart(2, '0');
    const day = String(newDate.getDate()).padStart(2, '0');
    const hours = String(newDate.getHours()).padStart(2, '0');
    const minutes = String(newDate.getMinutes()).padStart(2, '0');
    const seconds = String(newDate.getSeconds()).padStart(2, '0');
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return formattedDateTime;
  }

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="single__nft__card">
      <div className="nft__content">
        <h5 className="nft__title">
          <p>{policyName}</p>
        </h5>
        <div className="creator__info-wrapper d-flex gap-3">
          <div className="creator__info w-100 d-flex align-items-center justify-content-between">
            <div>
              <h6>Issued By</h6>
              <p>{issuerName}</p>
            </div>
            <div>
              <h6>Premium</h6>
              <p>${premium}</p>
            </div>
          </div>
        </div>
        <div className="creator__info w-100 d-flex align-items-center justify-content-between">
          <h6>Type</h6>
          <p>{policyType}</p>
        </div>
        <div className="creator__info w-100 d-flex align-items-center justify-content-between">
          <h6>Start Date</h6>
          <p>{formatDate(startDate)}</p>
        </div>
        <div className="creator__info w-100 d-flex align-items-center justify-content-between">
          <h6>Maturity Date</h6>
          <p>{formatDate(maturityDate)}</p>
        </div>
        <div className="creator__info w-100 d-flex align-items-center justify-content-between">
          <h6>Created At</h6>
          <p>{formatDateTime(timeCreated)}</p>
        </div>
        <div className="creator__info w-100 d-flex align-items-center justify-content-between">
          <h6>Policy ID</h6>
          <p>{policyId}</p>
        </div>
        <div className=" mt-3 d-flex align-items-center justify-content-between">
          <button
            className="bid__btn d-flex align-items-center gap-1"
            onClick={() => setShowModal(true)}
          >
            <i className="ri-shopping-bag-line"/> 
            Buy Insurance
          </button>
          {showModal && 
            <BuyModal 
              setShowModal={setShowModal}
              policyId={policyId}
              publicAddressOwner={publicAddressOwner}
              publicAddressAgent={publicAddressAgent}
              issuerName={issuerName}
              policyName={policyName}
              policyType={policyType}
              premium={premium}
              startDate={formatDate(startDate)}
              maturityDate={formatDate(maturityDate)}
              timeCreated={formatDateTime(timeCreated)}
              description={description}
              type={type}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default BuyPolicyCard;
