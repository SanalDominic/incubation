import React from "react";

export const Form = ({ values, setValues, submitForm }) => {
  return (
    <>
      <form>
        <div className="container p-4 pt-5 bg-light ">
          <div className="text-center">
            <h3 className="fw-bold mb-5">Incubation form submission</h3>
          </div>
          <div className="row g-3">
            <div className="col-12 col-sm-6">
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  className="form-control"
                  id="formGroupExampleInput"
                  onChange={(e) =>
                    setValues({ ...values, name: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={values.address}
                  className="form-control"
                  id="formGroupExampleInput"
                  onChange={(e) =>
                    setValues({ ...values, address: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={values.city}
                  className="form-control"
                  id="formGroupExampleInput"
                  onChange={(e) =>
                    setValues({ ...values, city: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  value={values.state}
                  className="form-control"
                  id="formGroupExampleInput"
                  onChange={(e) =>
                    setValues({ ...values, state: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  id="formGroupExampleInput"
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Phone no
                </label>
                <input
                  type="text"
                  name="number"
                  value={values.number}
                  className="form-control"
                  id="formGroupExampleInput"
                  onChange={(e) =>
                    setValues({ ...values, number: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Comapny Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={values.company}
                  className="form-control"
                  id="formGroupExampleInput"
                  onChange={(e) =>
                    setValues({ ...values, company: e.target.value })
                  }
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
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Describe your team and background
                </label>
                <textarea
                  name="team"
                  value={values.team}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={(e) =>
                    setValues({ ...values, team: e.target.value })
                  }
                ></textarea>
              </div>
            </div>
            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Describe your company and products
                </label>
                <textarea
                  name="products"
                  value={values.products}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={(e) =>
                    setValues({ ...values, products: e.target.value })
                  }
                ></textarea>
              </div>
            </div>
            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Describe the problem you are trying to solve
                </label>
                <textarea
                  name="solve"
                  value={values.solve}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={(e) =>
                    setValues({ ...values, solve: e.target.value })
                  }
                ></textarea>
              </div>
            </div>
            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  What is unique about your solution?
                </label>
                <textarea
                  name="solution"
                  value={values.solution}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={(e) =>
                    setValues({ ...values, solution: e.target.value })
                  }
                ></textarea>
              </div>
            </div>
            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  What is your value proposition for the customer ?
                </label>
                <textarea
                  name="proposition"
                  value={values.proposition}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={(e) =>
                    setValues({ ...values, proposition: e.target.value })
                  }
                ></textarea>
              </div>
            </div>
            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Who are your competitors and what is your competative
                  advantage ?
                </label>
                <textarea
                  name="competitors"
                  value={values.conpetitors}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={(e) =>
                    setValues({ ...values, competitors: e.target.value })
                  }
                ></textarea>
              </div>
            </div>
            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Explain your revenue model
                </label>
                <textarea
                  name="revenue"
                  value={values.revenue}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={(e) =>
                    setValues({ ...values, revenue: e.target.value })
                  }
                ></textarea>
              </div>
            </div>
            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  What is the maximum potential size of the product ?
                </label>
                <textarea
                  name="potential"
                  value={values.potential}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={(e) =>
                    setValues({ ...values, potential: e.target.value })
                  }
                ></textarea>
              </div>
            </div>
            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  How do you market or plan to market your products and services
                </label>
                <textarea
                  name="market"
                  value={values.market}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={(e) =>
                    setValues({ ...values, market: e.target.value })
                  }
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
                  onClick={(e) =>
                    setValues({ ...values, incubation: e.target.value })
                  }
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
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
                  onClick={(e) =>
                    setValues({ ...values, incubation: e.target.value })
                  }
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Virtual incubation
                </label>
              </div>
            </div>
            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Upload a detailed business proposal
                </label>
                <textarea
                  name="business"
                  value={values.business}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={(e) =>
                    setValues({ ...values, business: e.target.value })
                  }
                ></textarea>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <button
                type="submit"
                className="btn btn-dark rounded-pill border w-auto  mt-3 p-2 px-5"
                onClick={submitForm}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
