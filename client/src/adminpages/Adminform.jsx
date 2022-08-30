import React from "react";

export const Adminform = ({ values }) => {
  return (
    <>
      <div>
        {values &&
          values.map((values) => {
            return (
              <div className="container p-4 pt-5 bg-light ">
                <div className="text-center">
                  <h3 className="fw-bold mb-5">Incubation Details</h3>
                </div>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <div className="mb-3">
                      <label
                        htmlFor="formGroupExampleInput"
                        className="form-label"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={values.name}
                        className="form-control"
                        id="formGroupExampleInput"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="mb-3">
                      <label
                        htmlFor="formGroupExampleInput"
                        className="form-label"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={values.form.address}
                        className="form-control"
                        id="formGroupExampleInput"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="mb-3">
                      <label
                        htmlFor="formGroupExampleInput"
                        className="form-label"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={values.form.city}
                        className="form-control"
                        id="formGroupExampleInput"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="mb-3">
                      <label
                        htmlFor="formGroupExampleInput"
                        className="form-label"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={values.form.state}
                        className="form-control"
                        id="formGroupExampleInput"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="mb-3">
                      <label
                        htmlFor="formGroupExampleInput"
                        className="form-label"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        value={values.form.email}
                        className="form-control"
                        id="formGroupExampleInput"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="mb-3">
                      <label
                        htmlFor="formGroupExampleInput"
                        className="form-label"
                      >
                        Phone no
                      </label>
                      <input
                        type="text"
                        name="number"
                        value={values.form.number}
                        className="form-control"
                        id="formGroupExampleInput"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="mb-3">
                      <label
                        htmlFor="formGroupExampleInput"
                        className="form-label"
                      >
                        Comapny Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={values.form.company}
                        className="form-control"
                        id="formGroupExampleInput"
                      />
                    </div>
                  </div>
                  {/* <div className="col-12 col-sm-6">
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Company logo
          </label>
          <input
            className="form-control"
            name="logo"
            type="file"
            id="formFile"
          />
        </div>
        </div> */}
                  <div className="col-12">
                    <div className="mb-3">
                      <label
                        htmlFor="formGroupExampleInput"
                        className="form-label"
                      >
                        Describe your team and background
                      </label>
                      <textarea
                        name="team"
                        value={values.form.team}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-3">
                      <label
                        htmlFor="formGroupExampleInput"
                        className="form-label"
                      >
                        Describe your company and products
                      </label>
                      <textarea
                        name="products"
                        value={values.form.products}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-3">
                      <label
                        htmlFor="formGroupExampleInput"
                        className="form-label"
                      >
                        Describe the problem you are trying to solve
                      </label>
                      <textarea
                        name="solve"
                        value={values.form.solve}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-3">
                      <label
                        htmlFor="formGroupExampleInput"
                        className="form-label"
                      >
                        What is unique about your solution?
                      </label>
                      <textarea
                        name="solution"
                        value={values.form.solution}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-3">
                      <label
                        htmlFor="formGroupExampleInput"
                        className="form-label"
                      >
                        What is your value proposition for the customer ?
                      </label>
                      <textarea
                        name="proposition"
                        value={values.form.proposition}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-3">
                      <label
                        htmlFor="formGroupExampleInput"
                        className="form-label"
                      >
                        Who are your competitors and what is your competative
                        advantage ?
                      </label>
                      <textarea
                        name="competitors"
                        value={values.form.competitors}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-3">
                      <label
                        htmlFor="formGroupExampleInput"
                        className="form-label"
                      >
                        Explain your revenue model
                      </label>
                      <textarea
                        name="revenue"
                        value={values.form.revenue}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-3">
                      <label
                        htmlFor="formGroupExampleInput"
                        className="form-label"
                      >
                        What is the maximum potential size of the product ?
                      </label>
                      <textarea
                        name="potential"
                        value={values.form.potential}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-3">
                      <label
                        htmlFor="formGroupExampleInput"
                        className="form-label"
                      >
                        How do you market or plan to market your products and
                        services
                      </label>
                      <textarea
                        name="market"
                        value={values.form.market}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="incubation"
                        value="physical"
                        id="flexRadioDefault1"
                        checked={
                          values.form.incubation === "physical" ? true : false
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Physical incubation
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="incubation"
                        value="virtual"
                        id="flexRadioDefault2"
                        checked={
                          values.form.incubation === "virtual" ? true : false
                        }
                        readOnly
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        Virtual incubation
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-3">
                      <label
                        htmlFor="formGroupExampleInput"
                        className="form-label"
                      >
                        Upload a detailed business proposal
                      </label>
                      <textarea
                        name="business"
                        value={values.form.business}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
