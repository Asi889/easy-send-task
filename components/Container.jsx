"use client";

import { useEffect, useState } from "react";

const Container = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [socialSecurityNumber, setSocialSecurityNumber] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [withdrawalRequest, setWithdrawalRequest] = useState("");
    const [transferCancelRequest, setTransferCancelRequest] = useState("");
    const [lifeInsuranceOnboardingForm, setLifeInsuranceOnboardingForm] = useState("");
    const [fullName, setFullName] = useState("");
    const [acountNumber, setAcountNumber] = useState("");
    const [fundeNumber, setFundeNumber] = useState("");
    const [employee, setEmployee] = useState("");
    const [indipendant, setIndipendant] = useState("");
    const [full_withdrawal, SetFull_withdrawal] = useState("");
    const [partial_withdrawal, SetPartial_withdrawal] = useState("");
    const [monthly, SetMonthly] = useState(false);
    const [firstSelectedOption, setFirstSelectedOption] = useState("");
    const [secondeSelectedOption, setSecondeSelectedOption] = useState("");
    const [thirdSelectedOption, setThirdSelectedOption] = useState("");
    const [withdralAmount, setWithdralAmount] = useState("");
    const [paymentWithdrawl, setPaymentWithdrawl] = useState(false);
    const [eligible, setEligible] = useState(false);
    const handlefisrtSelectedOption = (e) => {
        setFirstSelectedOption(e.target.value)
    }
    const handSecondeSelectedOption = (e) => {
        setSecondeSelectedOption(e.target.value)
    }
    const handThirdSelectedOption = (e) => {
        setThirdSelectedOption(e.target.value)
    }

    const handleClearForm = () => {
        setFirstName("")
        setLastName("")
        setSocialSecurityNumber("")
        setMobile("")
        setEmail("")
        setWithdrawalRequest("")
        setTransferCancelRequest("")
        setLifeInsuranceOnboardingForm("")
    }

    const handleSendForm = () => {
        validate()
        // const form = {
        //     firstName,
        //     lastName,
        //     socialSecurityNumber,
        //     mobile,
        //     email,
        //     withdrawalRequest,
        //     transferCancelRequest,
        //     lifeInsuranceOnboardingForm

        // }
        // console.log("form ha been sent");
        handleClearForm()
    }
    const validate = () => {
        // let res = /^[a-zA-Z]+$/.test('sfjd');

        // if (firstName == res) {
        // }
    }


    return (
        <div className="w-full px-20 flex justify-center">
            <form action="">
                <ul className="grid">
                    <div className="flex gap-x-2">
                        <li>
                            <input
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="first-name m-2 pl-2"
                                type="text"
                                placeholder="First Name"
                            />
                        </li>
                        <li>
                            <input value={lastName} onChange={(e) => setLastName(e.target.value)} className="last-name m-2 pl-2" type="text" placeholder="last-name" />
                        </li>
                    </div>
                    <li>
                        <input value={socialSecurityNumber} onChange={(e) => setSocialSecurityNumber(e.target.value)} className="social-security-number m-2 pl-2" type="number" placeholder="social security number" />
                    </li>
                    <li>
                        <input value={mobile} onChange={(e) => setMobile(e.target.value)} className="mobile m-2 pl-2" type="number" placeholder="Mobile Phone Number" />
                    </li>
                    <li>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className="email m-2 pl-2" type="email" placeholder="email" />
                    </li>
                    <li>
                        <h2 className="font-semibold">type of form to send</h2>
                        <input type="radio" value="withdrawalRequestVal" name="withdrawalRequest" checked={firstSelectedOption === "withdrawalRequestVal"} onClick={(e) => handlefisrtSelectedOption(e)} />
                        <span>fund withdrawal request </span>
                        <div>
                        </div>
                        <div>
                            <input type="radio" value="transferCancelRequestVal" name="transferCancelRequest" checked={firstSelectedOption === "transferCancelRequestVal"} onClick={(e) => handlefisrtSelectedOption(e)} />
                            <span>fund transfer cancel rewust </span>
                        </div>
                        <div>
                            <input type="radio" value="lifeInsuranceOnboardingFormVal" namw="lifeInsuranceOnboardingForm" checked={firstSelectedOption === "lifeInsuranceOnboardingFormVal"} onClick={(e) => handlefisrtSelectedOption(e)} />
                            <span>life insurance onboarding form </span>
                        </div>
                    </li>
                    <li className="pt-6 grid gap-y-4">
                        <div>

                            <input type="text" placeholder="Fund name" value={fullName} onchange={(e) => setFullName(e.target.value)} />
                        </div>
                        <div>
                            <input type="number" placeholder="account number" valu={acountNumber} onchange={(e) => setAcountNumber(e.target.value)} />

                        </div>
                        <div>
                            <input type="number" placeholder="fund number" valu={fundeNumber} onchange={(e) => setFundeNumber(e.target.value)} />

                        </div>

                    </li>
                    <li className="pt-4 bold">
                        <h2 className="font-semibold"> employment type</h2>
                        <div className="">
                            <input type="radio" value="employeeVal" name="employee" checked={secondeSelectedOption === "employeeVal"} onClick={(e) => handSecondeSelectedOption(e)} />
                            <span>Employee </span>
                        </div>
                        <div>
                            <input type="radio" value="indipendant" namw="indipendant" checked={secondeSelectedOption === "indipendant"} onClick={(e) => handSecondeSelectedOption(e)} />
                            <span>indipendant </span>
                        </div>

                    </li>
                    <li className="pt-4">
                        <h2 className="font-semibold">Withdral type</h2>
                        <div className="">
                            <input type="radio" value="fullWithdrawal" name="fullWithdrawal" checked={thirdSelectedOption === "fullWithdrawal"} onClick={(e) => handThirdSelectedOption(e)} />
                            <span>full withdrawal </span>
                        </div>

                        <div className="">
                            <input type="radio" value="monthly" name="monthly" checked={thirdSelectedOption === "monthly"} onClick={(e) => handThirdSelectedOption(e)} />
                            <span>automated monthly withdrawl</span>
                            {thirdSelectedOption === "monthly" ? (
                                <div className="grid">
                                    <div className="">
                                        <input type="radio" value={partial_withdrawal} name="transferCancelRequest" checked={partial_withdrawal ? true : false} onClick={() => SetPartial_withdrawal(!partial_withdrawal)} />
                                        <span>partial withdrawal </span>
                                        {partial_withdrawal ? <input value={withdralAmount} onChange={(e) => setWithdralAmount(e.target.value)} type="number" placeholder="withdrwal amount" /> : ""}
                                    </div>
                                    <div>
                                        <input value={paymentWithdrawl} onChange={(e) => setPaymentWithdrawl(!paymentWithdrawl)} type="checkbox" placeholder="payment withdrawl" />
                                        <span>payment withdrawl</span>
                                    </div>
                                    {paymentWithdrawl ? (
                                        <div className="pl-4 pt-3">
                                            <div className="flex">
                                                <input type="checkbox" value={eligible} onchange={() => setEligible(true)} checkd={eligible ? true : false} />
                                                <span>eligible for tax refund</span>

                                            </div>
                                            <div className="flex">
                                                <input type="checkbox" value={eligible} onchange={() => setEligible(false)} checkd={eligible ? true : false} />
                                                <span> noteligible for tax refund</span>

                                            </div>
                                        </div>

                                    ) : ""}
                                </div>
                            )
                                : ""}
                        </div>

                    </li>


                    <button onClick={handleClearForm} className="p-3 bg-purple-500 mt-5">Clear Form</button>
                    <button onClick={handleSendForm} className="p-3 bg-orange-400 mt-5">Send Form</button>
                </ul>
            </form>
        </div>
    )
}
export default Container;