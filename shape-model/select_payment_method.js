const select_payment_method = (payment_method) => {
  switch (payment_method) {
    case "Bitcoin":
      return {
        payment_method: "Bitcoin",
        payment_method_icon:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/96px-Bitcoin.svg.png",
        //  payment_wallet: "bc1qwwzapsj924yxxv2n6rcw4wunpeh0f008tff7zm",
        payment_wallet: "bc1qe2j05j2f7pm0dgjgu328havljf7qqnagdduj90",
      };
      break;

    case "Ethereum":
      return {
        payment_method: "Ethereum",
        payment_method_icon:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/480px-Ethereum-icon-purple.svg.png",
        payment_wallet: "0xFeAEc8559afcddD7355AcAD930a5624468E16A48",
        //  payment_wallet: "0xf88227a29E7b1bca43cb248CC7d6322cA84fa75c",
      };
      break;

    case "USDT(TRC20)":
      return {
        payment_method: "USDT(TRC20)",
        payment_method_icon:
          "https://static.crypto.com/token/icons/tether/color_icon.png",
        payment_wallet: "TDc7TbRLnfpGYCDYxvCG5NtK8xvt6sF2z5",
        //payment_wallet: "TYGMwRSBiiKf4NWjBGSrm57Cp7itq51xEN",
      };
      break;

    case "LTC":
      return {
        payment_method: "LTC",
        payment_method_icon:
          "https://s2.coinmarketcap.com/static/img/coins/64x64/2.png",
        payment_wallet: "ltc1qusw267yjlmxyh68s8vuwlt8u3n92vf8q0j3uvq",
      };
      break;

    case "TRX":
      return {
        payment_method: "TRX",
        payment_method_icon:
          "https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png",
        payment_wallet: "TKegbW2tzhKGCpu5p8P4vvFzeF1TAUfkZi",
      };
      break;

    // case "Paypal":
    //   return {
    //     payment_method: "Paypal",
    //     // payment_method_icon:
    //     //   "css/images/bc1q8f3c2lmav0uxkgkm90c4l2eqwy6k2agz0nqfmy.png",
    //     payment_wallet: "bc1q8f3c2lmav0uxkgkm90c4l2eqwy6k2agz0nqfmyPAYPAL",
    //   };
    //   break;

    // case "Perfect Money":
    //   return {
    //     payment_method: "Perfect Money",
    //     // payment_method_icon:
    //     //   "css/images/bc1q8f3c2lmav0uxkgkm90c4l2eqwy6k2agz0nqfmy.png",
    //     payment_wallet: "bc1q8f3c2lmav0uxkgkm90c4l2eqwy6k2agz0nqfmyPAYPAL",
    //   };
    //   break;

    default:
      return {
        payment_method: "Bitcoin",
        payment_method_icon: "css/images/btc.jpeg",
        payment_wallet: "bc1qe2j05j2f7pm0dgjgu328havljf7qqnagdduj90",
      };
      break;
  }
};

module.exports = select_payment_method;
