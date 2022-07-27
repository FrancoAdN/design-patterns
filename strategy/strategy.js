class MercadoLibre {
  sameContryRate = 10;
  pricePerKg = 101;
  argentinaRate = 20;

  calculate(packageInfo) {
    let price = packageInfo.weight * this.pricePerKg;
    if (packageInfo.countryFrom === packageInfo.countryTo) {
      const rate =
        packageInfo.countryFrom === "Argentina"
          ? this.argentinaRate
          : this.sameContryRate;
      price = price - price * (rate / 100);
    }

    return price;
  }
}

class Amazon {
  sameContryRate = 9;
  pricePerKg = 90;
  australiaDiscount = 5;
  calculate(packageInfo) {
    let price = packageInfo.weight * this.pricePerKg;
    if (packageInfo.countryFrom === packageInfo.countryTo)
      price = price - price * (this.sameContryRate / 100);

    if (packageInfo.countryTo === "Australia")
      price = price - this.australiaDiscount / 100;
    return price;
  }
}
class DHL {
  sameContryRate = 12;
  pricePerKg = 85;
  cordobaDiscount = 2;
  calculate(packageInfo) {
    let price = packageInfo.weight * this.pricePerKg;
    if (packageInfo.countryFrom === packageInfo.countryTo)
      price = price - price * (this.sameContryRate / 100);

    if (packageInfo.stateTo === "Cordoba")
      price = price - price * (this.cordobaDiscount / 100);

    return price;
  }
}
class Fedex {
  sameContryRate = 5;
  pricePerKg = 78;

  calculate(packageInfo) {
    let price = packageInfo.weight * this.pricePerKg;
    if (packageInfo.countryFrom === packageInfo.countryTo)
      price = price - price * (this.sameContryRate / 100);

    return price;
  }
}

class Shipping {
  company = null;

  // Dependency injection design pattern
  setStrategy(company) {
    this.company = company;
  }

  calculate(packageInfo) {
    if (this.company) return this.company.calculate(packageInfo);
    console.log("Cannot calculate shipping");
  }
}

// Factory design pattern
class CompanyFactory {
  static getCompany(name) {
    switch (name) {
      case "Amazon":
        return new Amazon();
      case "DHL":
        return new DHL();
      case "Fedex":
        return new Fedex();
      default:
        return new MercadoLibre();
    }
  }
}

// facade design pattern
const calculateAllCompanies = (packageInfo) => {
  const companies = ["Amazon", "DHL", "MercadoLibre", "Fedex"];

  return companies.reduce((acc, company) => {
    const ship = new Shipping();
    ship.setStrategy(CompanyFactory.getCompany(company));
    acc = {
      ...acc,
      [company]: ship.calculate(packageInfo),
    };
    return acc;
  }, {});
};

function main() {
  const packageOne = {
    weight: 12.3,
    countryFrom: "Argentina",
    countryTo: "Argentina",
    stateFrom: "CABA",
    stateTo: "Cordoba",
    entity: "Personal",
  };

  const packageTwo = {
    weight: 2.3,
    countryFrom: "Argentina",
    countryTo: "Australia",
    stateFrom: "CABA",
    stateTo: "NSW",
    entity: "Company",
  };

  const pricesPackageOne = calculateAllCompanies(packageOne);
  const pricesPackageTwo = calculateAllCompanies(packageTwo);

  console.log("Package One: ", pricesPackageOne);
  console.log("Package Two: ", pricesPackageTwo);
}

main();
