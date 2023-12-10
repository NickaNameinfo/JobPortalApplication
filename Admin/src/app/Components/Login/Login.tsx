import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import {
  IconCLose,
  IconForgotSVG,
  IconLogin,
  IconLoginSVG,
  IconNewPasswordSVG,
  IconOTPSVG,
  IconProfile,
  IconRegisterSVG,
} from "../Icons";
import { ForgotPassword } from "./ForgotPassword";
import { OTPPage } from "./Otp";
import { NewPassword } from "./NewPassword";
import { Register } from "./Register";

export const Login = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [isForgetPassword, setIsForgetPassword] = React.useState(false);
  const [isOTP, setIsOTP] = React.useState(false);
  const [isNewPassword, setIsNewPassword] = React.useState(false);
  const [isRegister, setIsRegister] = React.useState(false);

  const onCloseModal = () => {
    onClose();
    setIsForgetPassword(false);
    setIsOTP(false);
    setIsNewPassword(false);
    setIsRegister(false);
  };
  const onClickLogin = () => {
    if (isForgetPassword) {
      setIsOTP(true);
      if (isOTP) {
        setIsNewPassword(true);
      }
    }
  };
  const onClickRegister = () => {
    setIsRegister(true);
  };

  return (
    <>
      <Button
        isIconOnly
        color="primary"
        className="bg-primary-900"
        aria-label="Take a photo"
        onPress={onOpen}
      >
        <IconProfile />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onCloseModal}
        placement="top-center"
        size="lg"
        // closeButton={
        //   <>
        //     <IconCLose
        //       width={30}
        //       height={30}
        //       className={
        //         "p-2 cursor-pointer rounded-full IconCloseBtn absolute -top-3 -right-3"
        //       }
        //     />
        //   </>
        // }
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex self-center flex-col gap-1">
                <div className="flex justify-center">
                  {isRegister ? (
                    <IconRegisterSVG width="180px" height="180px" />
                  ) : isNewPassword ? (
                    <IconNewPasswordSVG width="180px" height="180px" />
                  ) : isOTP ? (
                    <IconOTPSVG width="180px" height="180px" />
                  ) : isForgetPassword ? (
                    <IconForgotSVG width="180px" height="180px" />
                  ) : (
                    <IconLoginSVG width="180px" height="180px" />
                  )}
                </div>
                <div className="self-center font-bold text-3xl">
                  {isRegister
                    ? "Register"
                    : isNewPassword
                    ? "Create New Password"
                    : isOTP
                    ? "Enter OTP"
                    : isForgetPassword
                    ? "Forgot password"
                    : "Login"}
                </div>
              </ModalHeader>
              <ModalBody>
                {isRegister ? (
                  <Register />
                ) : isNewPassword ? (
                  <NewPassword />
                ) : isOTP ? (
                  <OTPPage />
                ) : isForgetPassword ? (
                  <ForgotPassword />
                ) : (
                  <>
                    <Input
                      classNames={{
                        inputWrapper: ["border", "border-slate-100"],
                        input: [
                          "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                        ],
                      }}
                      isClearable
                      autoFocus
                      label="Email Address"
                      labelPlacement="outside"
                      placeholder="Enter Your Email Address"
                      variant="bordered"
                    />
                    <Input
                      classNames={{
                        inputWrapper: ["border", "border-slate-100"],
                        input: [
                          "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                        ],
                      }}
                      label="Password"
                      labelPlacement="outside"
                      placeholder="Enter Your Password"
                      type="password"
                      variant="bordered"
                    />
                    <div className="flex py-2 px-1 justify-between">
                      <Checkbox
                        classNames={{
                          label: "text-small",
                        }}
                      >
                        Remember me
                      </Checkbox>
                      <Link
                        className="cursor-pointer"
                        color="primary"
                        onPress={() => setIsForgetPassword(true)}
                        size="sm"
                      >
                        Forgot password?
                      </Link>
                    </div>
                  </>
                )}

                <Button color="primary" onPress={() => onClickLogin()}>
                  {isRegister
                    ? "Register"
                    : isForgetPassword
                    ? "SUBMIT"
                    : "LOGIN"}
                  <IconLogin fill="white" />
                </Button>
              </ModalBody>
              <ModalFooter className="justify-center">
                <div className="flex items-center">
                  <p className="text-sm pe-2 Iconweb text-slate-500">
                    {isRegister ? "Already Have a Member ?" : "Not A Member ?"}
                  </p>
                  <Link
                    className="cursor-pointer font-semibold"
                    color="primary"
                    onPress={() => onClickRegister()}
                    size="sm"
                  >
                    {isRegister ? "LogIn" : "Register Now"}
                  </Link>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
