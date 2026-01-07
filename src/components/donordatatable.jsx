"use client";

import React, { useState } from "react";
import { ChevronDown, X } from "lucide-react";

const DonorDataTable = () => {
  const [selectedYear, setSelectedYear] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDonor, setSelectedDonor] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const donorsPerPage = 10;

  const donorData = {
    2025: {
      totalDonors: 10,
      donors: [
         {
          id: 1,
          rshid: "SH/25/275667",
          recipientdetails: "MRS TAMILARASI",
          ageandsex: "30/F",
          bgroup: "A-",
          relationship: "CADAVER",
          torgan: "KIDNEY ",
          committeeapprovalno: "TNOS 27562",
          status: "STABLE",
          dateofsurgery: "4-01-2025",
          dateofdischarge: "9-01-2025",
          donordetails: "MR SATHYANARAYANAN ",
          donorageandsex: "45/M",
          dshid: "TNOS D/ID/9108 ",
          dbgroup: "A-",
        },
        {
          id: 2,
          rshid: "SH/24/250665",
          recipientdetails: "MR CHANDRAN",
          ageandsex: "62/M",
          bgroup: "B+",
          relationship: "CADAVER",
          torgan: "KIDNEY ",
          committeeapprovalno: "TNOS 39853",
          status: "STABLE",
          dateofsurgery: "11-01-2025",
          dateofdischarge: "17-01-2025",
          donordetails: "MR SENNI   ",
          donorageandsex: "58/M",
          dshid: "TNOS D/ID/9117 ",
          dbgroup: "B+",
        },
        {
          id: 3,
          rshid: "SH/24/173083",
          recipientdetails: "MR PARI",
          ageandsex: "32/M",
          bgroup: "O-",
          relationship: "MOTHER ",
          torgan: "KIDNEY ",
          committeeapprovalno: "2/1/2025//21550/E8/2024",
          status: "STABLE",
          dateofsurgery: "09-01-2025",
          dateofdischarge: "14-01-2025",
          donordetails: "MRS MYTHILI ",
          donorageandsex: "70/F",
          dshid: "SH/24/269700 ",
          dbgroup: "O-",
        },
        {
          id: 4,
          rshid: "SH/24/271273",
          recipientdetails: "MRS VIJAYALAKSHMI",
          ageandsex: "43/F",
          bgroup: "B+",
          relationship: "MOTHER ",
          torgan: "KIDNEY ",
          committeeapprovalno: "2/1/2025//21549/E8/2024",
          status: "STABLE",
          dateofsurgery: "21-01-2025",
          dateofdischarge: "26-01-2025",
          donordetails: "MRS SUNDARI  ",
          donorageandsex: "62/F",
          dshid: "SH/24/271273",
          dbgroup: "B+",
        },
        {
          id: 5,
          rshid: "SH/24/273009",
          recipientdetails: "MR MOHANKUMAR",
          ageandsex: "23/F",
          bgroup: "B-",
          relationship: "MOTHER ",
          torgan: "KIDNEY ",
          committeeapprovalno: "23/1/2025//854/E8/2025",
          status: "STABLE",
          dateofsurgery: "29-01-2025",
          dateofdischarge: "01-02-2025",
          donordetails: "MRS PALANIYAMMAL ",
          donorageandsex: " 50/F",
          dshid: "SH/24/273011 ",
          dbgroup: "B+",
        },
        {
          id: 6,
          rshid: "SH/24/273899",
          recipientdetails: "MR THIRUMOORTHY",
          ageandsex: "31/F",
          bgroup: "O+",
          relationship: "MOTHER ",
          torgan: "KIDNEY ",
          committeeapprovalno: "23/1/2025//853/E8/2025",
          status: "STABLE",
          dateofsurgery: "01-02-2025",
          dateofdischarge: "07-02-2025",
          donordetails: "MRS JOTHIMANI  ",
          donorageandsex: "50/F ",
          dshid: "SH/24/273897 ",
          dbgroup: "O+",
        },
        {
          id: 7,
          rshid: "SH/24/272031",
          recipientdetails: "MR PRABU",
          ageandsex: "27/M",
          bgroup: "A1B+",
          relationship: "FATHER  ",
          torgan: "KIDNEY ",
          committeeapprovalno: "25/1/2025//848/E82025",
          status: "STABLE",
          dateofsurgery: "3-03-2025",
          dateofdischarge: "09-03-2025",
          donordetails: "MR RAJU ",
          donorageandsex: "55/M",
          dshid: "SH/24/272032 ",
          dbgroup: "A1B+",
        },
        {
          id: 8,
          rshid: "SH/24/274487",
          recipientdetails: "MR VALARMATHI",
          ageandsex: "45/F",
          bgroup: "O+",
          relationship: "MOTHER ",
          torgan: "KIDNEY ",
          committeeapprovalno: "13/2/2025//2323/E8/2025",
          status: "STABLE",
          dateofsurgery: "10-03-2025",
          dateofdischarge: "15-03-2025",
          donordetails: "MR PUSPAM  ",
          donorageandsex: " 66/F",
          dshid: "SH/24/274487 ",
          dbgroup: "O+",
        },
        {
          id: 9,
          rshid: "SH/24/275495",
          recipientdetails: "MR DHANASEKARAN",
          ageandsex: "53/M",
          bgroup: "O+",
          relationship: "MOTHER ",
          torgan: "KIDNEY ",
          committeeapprovalno: "13/2/2025//2330/E8/2025",
          status: "STABLE",
          dateofsurgery: "20-03-2025",
          dateofdischarge: "26-03-2025",
          donordetails: "MRS BAVAYI   ",
          donorageandsex: "78/F",
          dshid: "SH/25/275494 ",
          dbgroup: "O+",
        },
        {
          id: 10,
          rshid: "SH/25/276835",
          recipientdetails: "MR THIRUMOORTHY",
          ageandsex: "42/M",
          bgroup: "B+",
          relationship: "WIFE",
          torgan: "KIDNEY ",
          committeeapprovalno: "27/3/2025//4831/E8/2025",
          status: "STABLE",
          dateofsurgery: "10-04-2025",
          dateofdischarge: "15-04-2025",
          donordetails: "MRS KALAIVANI   ",
          donorageandsex: "36/F",
          dshid: "SH/24/276833 ",
          dbgroup: "B+",
        },
        {
          id: 11,
          rshid: "SH/25/282106",
          recipientdetails: "MR ARUMUGAM",
          ageandsex: "55/M",
          bgroup: "B+",
          relationship: "WIFE",
          torgan: "KIDNEY ",
          committeeapprovalno: "8/5/2025//6845/E8/2025",
          status: "STABLE",
          dateofsurgery: "22-05-2025",
          dateofdischarge: "27-05-02025",
          donordetails: "MRS MATHAMMAL ",
          donorageandsex: " 54/F ",
          dshid: "SH/25/282108 ",
          dbgroup: "O+",
        },
        {
          id: 12,
          rshid: "SH/25/281106",
          recipientdetails: "MR BASKARAN",
          ageandsex: "32/M",
          bgroup: "B+",
          relationship: "FATHER ",
          torgan: "KIDNEY ",
          committeeapprovalno: "8/5/2025//6846/E8/2025",
          status: "STABLE",
          dateofsurgery: "23-05-2025",
          dateofdischarge: "29-05-2025",
          donordetails: "MR SAKTHIVEL ",
          donorageandsex: "62/M ",
          dshid: "SH/25/281105 ",
          dbgroup: "O+",
        },
        {
          id: 13,
          rshid: "SH/25/281104",
          recipientdetails: "MRS CHITRA",
          ageandsex: "46/F",
          bgroup: "O+",
          relationship: "BROTHER",
          torgan: "KIDNEY ",
          committeeapprovalno: "15/5/2025//7584/E8/2025",
          status: "STABLE",
          dateofsurgery: "31-05-2025",
          dateofdischarge: "06-06-2025",
          donordetails: "MR MARASAMY  ",
          donorageandsex: "49/M",
          dshid: "SH/25/281103 ",
          dbgroup: "O+",
        },
        {
          id: 14,
          rshid: "SH/25/284270",
          recipientdetails: " MR SARANYA ",
          ageandsex: "33/F",
          bgroup: "A+",
          relationship: "MOTHER ",
          torgan: "KIDNEY ",
          committeeapprovalno: "5/6/2025//9070E8/2025",
          status: "STABLE",
          dateofsurgery: "9-06-2025",
          dateofdischarge: "17-06-2025",
          donordetails: " MRS INDHIRANI ",
          donorageandsex: "55/F ",
          dshid: "SH/25/284271 ",
          dbgroup: "A+",
        },
        {
          id: 15,
          rshid: "SH/25/280839",
          recipientdetails: " MR CHANDRASEKARAN ",
          ageandsex: "56/M",
          bgroup: "B+",
          relationship: "SWAP ",
          torgan: "KIDNEY ",
          committeeapprovalno: "12/16/2025//9514/E8/2025",
          status: "STABLE",
          dateofsurgery: "13-07-2025",
          dateofdischarge: "21-07-2025",
          donordetails: "MRS PARIMALAM",
          donorageandsex: "53/F",
          dshid: "SH/25/280844 ",
          dbgroup: "B+",
        },
        {
          id: 16,
          rshid: "SH/25/280845",
          recipientdetails: " MRS JAGATHAMBAL",
          ageandsex: "44/F",
          bgroup: "A+",
          relationship: "SWAP ",
          torgan: "KIDNEY ",
          committeeapprovalno: "12/6/2025//9514/E8/2025",
          status: "STABLE",
          dateofsurgery: "13-07-2025",
          dateofdischarge: "21-07-2025",
          donordetails: "MRS THILAINAYAGI ",
          donorageandsex: "47/F",
          dshid: "SH/22/204096 ",
          dbgroup: "A+",
        },
        {
          id: 17,
          rshid: "SH/24/261556",
          recipientdetails: " MRS GOWHAR BEGUM",
          ageandsex: "52/F",
          bgroup: "B+",
          relationship: "CADAVER ",
          torgan: "KIDNEY ",
          committeeapprovalno: "TNOS 42727",
          status: "STABLE",
          dateofsurgery: "27-07-2025",
          dateofdischarge: "08-08-2025",
          donordetails: "MR CHNADRASEKAR",
          donorageandsex: "50/M",
          dshid: "TNOS D/ID/10274",
          dbgroup: "B+",
        },
        {
          id: 18,
          rshid: "SH/24/283291",
          recipientdetails: " MRS GOWTHAM",
          ageandsex: "19/M",
          bgroup: "A1+",
          relationship: "MOTHER",
          torgan: "KIDNEY ",
          committeeapprovalno: "17/7/2025//12197/E8/2025",
          status: "STABLE",
          dateofsurgery: "07-08-2025",
          dateofdischarge: "18-08-2025",
          donordetails: "MRS VALLIMAYIL",
          donorageandsex: "39/F",
          dshid: "SH/25/283446",
          dbgroup: "O+",
        },
        {
          id: 19,
          rshid: "SH/24/276653",
          recipientdetails: " Mast. Sridhar.S",
          ageandsex: "11/M",
          bgroup: "A1+",
          relationship: "CADAVER",
          torgan: "KIDNEY ",
          committeeapprovalno: "TNOS 45078",
          status: "STABLE",
          dateofsurgery: "31-08-2025",
          // dateofdischarge: "On Treatment",
          dateofdischarge: "15-09-2025",
          donordetails: "Oviya",
          donorageandsex: "7/F",
          dshid: "TNOS D/ID/10298",
          dbgroup: "A+",
        },
        {
          id: 20,
          rshid: "SH/24/258147",
          recipientdetails: " Ms.Kanimoyli",
          ageandsex: "31/F",
          bgroup: "O+",
          relationship: "CADAVER",
          torgan: "KIDNEY ",
          committeeapprovalno: "13133/E8/2025",
          status: "STABLE",
          dateofsurgery: "04-09-2025",
          dateofdischarge: "11-09-2025",
          donordetails: "Mrs.Jayanthi",
          donorageandsex: "55/F",
          dshid: "SH/25/286750",
          dbgroup: "B+",
        },
        {
          id: 21,
          rshid: "SH/24/292912",
          recipientdetails: " Mr.Vellaichamy",
          ageandsex: "53/M",
          bgroup: "O+",
          relationship: "Mother",
          torgan: "KIDNEY ",
          committeeapprovalno: "14929/E8/2025",
          status: "STABLE",
          dateofsurgery: "11-09-2025",
          dateofdischarge: "17-09-2025",
          donordetails: "Mrs.Lakshmiyammal",
          donorageandsex: "77/F",
          dshid: "SH/25/292911",
          dbgroup: "0+",
        },
        {
          id: 22,
          rshid: "SH/23/238625",
          recipientdetails: "Mrs.Kokiladevi",
          ageandsex: "45/F",
          bgroup: "B+",
          relationship: "Father",
          torgan: "KIDNEY ",
          committeeapprovalno: "14925/E8/2025",
          status: "STABLE",
          dateofsurgery: "18-09-2025",
          dateofdischarge: "25-09-2025",
          donordetails: "Mrs.Devaraj",
          donorageandsex: "70/M",
          dshid: "SH/25/290466",
          dbgroup: "B+",
        },
        {
          id: 23,
          rshid: "SH/25/284620",
          recipientdetails: "Ms.Varshni",
          ageandsex: "22/F",
          bgroup: "O-",
          relationship: "Grand Mother",
          torgan: "KIDNEY ",
          committeeapprovalno: "14926/E8/2025",
          status: "STABLE",
          dateofsurgery: "23-10-2025",
          dateofdischarge: "28-10-2025",
          donordetails: "Mrs.Rajammal",
          donorageandsex: "65/F",
          dshid: "SH/25/288912",
          dbgroup: "A+",
        },
        {
          id: 24,
          rshid: "SH/25/282818",
          recipientdetails: "Ms.Sinduja",
          ageandsex: "30/F",
          bgroup: "AB+",
          relationship: "Altruistic doner",
          torgan: "KIDNEY ",
          committeeapprovalno: "21211/E8/2025",
          status: "STABLE",
          dateofsurgery: "11-12-2025",
          dateofdischarge: "17-12-2025",
          donordetails: "Ms.Mangaiarkarasi",
          donorageandsex: "45/F",
          dshid: "SH/25/289479",
          dbgroup: "O+",
        },
        {
          id: 25,
          rshid: "SH/19/086709",
          recipientdetails: "Mr.Govindaraj krishnan",
          ageandsex: "36/M",
          bgroup: "B+",
          relationship: "Cadavar",
          torgan: "KIDNEY ",
          committeeapprovalno: "TNOS 30296",
          status: "STABLE",
          dateofsurgery: "10-12-2025",
          dateofdischarge: "24-12-2025",
          donordetails: "Mrs.A.Jaisankar",
          donorageandsex: "44/M",
          dshid: "10398",
          dbgroup: "B+",
        },
        {
          id: 26,
          rshid: "SH/25/294086",
          recipientdetails: "Mr.Alagesh",
          ageandsex: "30/M",
          bgroup: "AB+",
          relationship: "Mother",
          torgan: "KIDNEY ",
          committeeapprovalno: "16727|E8|2025",
          status: "STABLE",
          dateofsurgery: "27-12-2025",
          dateofdischarge: "02-01-2026",
          donordetails: "Mrs.Samiyathal",
          donorageandsex: "49/F",
          dshid: "SH|25|294087",
          dbgroup: "B+",
        },
        {
          id: 27,
          rshid: "SH/23/228211",
          recipientdetails: "Mr.Baby Sirajudeen",
          ageandsex: "43/F",
          bgroup: "O+",
          relationship: "Cadavar",
          torgan: "KIDNEY ",
          committeeapprovalno: "TNOS 37581",
          status: "STABLE",
          dateofsurgery: "24-12-2025",
          dateofdischarge: "01-01-2026",
          donordetails: "Mrs.Baby.R",
          donorageandsex: "55/F",
          dshid: "SH|25|302142",
          dbgroup: "O+",
        },
      ],
    },
    2024: {
      totalDonors: 5,
      donors: [
       

        // New data

        {
          id: 1,
          rshid: "SH/22/201667",
          recipientdetails: "MR GOWRISANKAR",
          ageandsex: "31/M",
          bgroup: "B+",
          relationship: "CADAVER",
          torgan: "KIDNEY",
          committeeapprovalno: "TNOS 37657",
          status: "STABLE",
          dateofsurgery: "02-02-2024",
          dateofdischarge: "10-02-2024",
          donordetails: "MR BOOPATHI",
          donorageandsex: "38/M",
          dshid: "SH/24/249741",
          dbgroup: "B+",
        },
        {
          id: 2,
          rshid: "SH/23/242679",
          recipientdetails: "MS KEERTHANA ",
          ageandsex: "22/M",
          bgroup: "O+",
          relationship: "FATHER ",
          torgan: "KIDNEY",
          committeeapprovalno: "29/2/2024//2856/E6(1)/2024",
          status: "STABLE",
          dateofsurgery: "23-03-2024",
          dateofdischarge: "27-03-2024",
          donordetails: "MR ANGAPPAN",
          donorageandsex: "",
          dshid: "SH/23/242680",
          dbgroup: "B+",
        },
        {
          id: 3,
          rshid: "SH/23/242945",
          recipientdetails: "MR BALAMURUGAN",
          ageandsex: "22/M",
          bgroup: "B+",
          relationship: "FATHER",
          torgan: "KIDNEY ",
          committeeapprovalno: "29/2/2024//2857/E6(1)2024",
          status: "STABLE",
          dateofsurgery: "01-04-2024",
          dateofdischarge: "08-04-2024",
          donordetails: "MR MUTHAPPAN",
          donorageandsex: "50/M",
          dshid: "SH/23/242946",
          dbgroup: "O+",
        },
        {
          id: 4,
          rshid: "SH/23/238252",
          recipientdetails: "MR RAJA ",
          ageandsex: "47/M",
          bgroup: "O+",
          relationship: "SISTER",
          torgan: "KIDNEY ",
          committeeapprovalno: "25/4/2024//6249/E6(1)2024",
          status: "STABLE",
          dateofsurgery: "04-05-2024",
          dateofdischarge: "10-05-2024",
          donordetails: "MR RANI",
          donorageandsex: "53/F",
          dshid: "SH/24/251465",
          dbgroup: "O+",
        },
        {
          id: 5,
          rshid: "SH/23/228726",
          recipientdetails: "MR SRINIVASAN ",
          ageandsex: " 53/M",
          bgroup: "O+",
          relationship: "CADAVER",
          torgan: "KIDNEY ",
          committeeapprovalno: "TNOS 37644",
          status: "STABLE",
          dateofsurgery: "02-05-2024",
          dateofdischarge: "09-05-2024",
          donordetails: "MS SANJUVIKASHINI  ",
          donorageandsex: "18/M",
          dshid: "SH/24/256650",
          dbgroup: "O+",
        },
        {
          id: 6,
          rshid: "SH/23/238530",
          recipientdetails: "MR PRITHVIRAJ",
          ageandsex: " 30/M",
          bgroup: "O+",
          relationship: "CADAVER",
          torgan: "KIDNEY ",
          committeeapprovalno: "TNOS  39098",
          status: "STABLE",
          dateofsurgery: "06-05-2024",
          dateofdischarge: "15-05-2024",
          donordetails: "MR SAKTHIVEL",
          donorageandsex: "26/M",
          dshid: "SH/24/256689",
          dbgroup: "O+",
        },
        {
          id: 7,
          rshid: "SH/22/215851",
          recipientdetails: "MR DHATCHINAMOORTHI  ",
          ageandsex: "52/M",
          bgroup: "A+",
          relationship: "CADAVER",
          torgan: "KIDNEY ",
          committeeapprovalno: "TNOS  29286",
          status: "STABLE",
          dateofsurgery: "23-05-2024",
          dateofdischarge: "01-06-2024",
          donordetails: "MR BOOPATHI  ",
          donorageandsex: "28/M",
          dshid: "TNOS D/ID/ 2926  ",
          dbgroup: "A+",
        },
        {
          id: 8,
          rshid: "SH/24/252737",
          recipientdetails: "MR HARSHA",
          ageandsex: "29/M",
          bgroup: "B+",
          relationship: "MOTHER ",
          torgan: "KIDNEY ",
          committeeapprovalno: "20/6/2024//9649/E3/2024",
          status: "STABLE",
          dateofsurgery: "22-07-2024",
          dateofdischarge: "29-07-2024",
          donordetails: "MRS MANJULA",
          donorageandsex: "54/F",
          dshid: "SH/24/252738 ",
          dbgroup: "O+",
        },
        {
          id: 9,
          rshid: "SH/24/257196",
          recipientdetails: "MR MOHANASUNDARAM  ",
          ageandsex: " 45/M",
          bgroup: "B+",
          relationship: "MOTHER ",
          torgan: "KIDNEY ",
          committeeapprovalno: "20/6/2024//9649/E3/2024",
          status: "STABLE",
          dateofsurgery: "01-08-2024",
          dateofdischarge: "08-08-2024",
          donordetails: "MRS MANI ",
          donorageandsex: "64/F",
          dshid: "SH/24/257197 ",
          dbgroup: "O+",
        },
        {
          id: 10,
          rshid: "SH/263256",
          recipientdetails: "MR KANNANMAYAVAN",
          ageandsex: " 34/M",
          bgroup: "AB+",
          relationship: "CADAVER ",
          torgan: "KIDNEY",
          committeeapprovalno: "TNOS  24497",
          status: "STABLE",
          dateofsurgery: "07-08-2024",
          dateofdischarge: "18-8-2024",
          donordetails: "MRS THAMILARASI",
          donorageandsex: "57/F",
          dshid: "TNOS D/ID/ 2987 ",
          dbgroup: "AB+",
        },
        {
          id: 11,
          rshid: "SH/17/014477",
          recipientdetails: "MR CHANDRASEKARAN",
          ageandsex: " 63/M",
          bgroup: "A+",
          relationship: "CADAVER ",
          torgan: "KIDNEY ",
          committeeapprovalno: "TNOS  37956",
          status: "STABLE",
          dateofsurgery: "08-08-2024",
          dateofdischarge: "15-08-2024",
          donordetails: "MR KAVIN PALANISAWAMY  ",
          donorageandsex: "19/M",
          dshid: "SH/24/263931 ",
          dbgroup: "A-",
        },
        {
          id: 12,
          rshid: "SH/24/258682",
          recipientdetails: "MS LAVANYAPALANIVEL ",
          ageandsex: " 25/F",
          bgroup: "O+",
          relationship: "CADAVER ",
          torgan: "KIDNEY ",
          committeeapprovalno: "TNOS  42259",
          status: "STABLE",
          dateofsurgery: "23-08-2024",
          dateofdischarge: "01-09-2024",
          donordetails: "MR KUMAR   ",
          donorageandsex: " 44/M",
          dshid: "SH/24/264732",
          dbgroup: "O+",
        },
        {
          id: 13,
          rshid: "SH/22/208187",
          recipientdetails: "MR KARTHI ",
          ageandsex: " 25/M",
          bgroup: "A+",
          relationship: "MOTHER ",
          torgan: "KIDNEY ",
          committeeapprovalno: "27/6/2024//9996/E3(1)2024",
          status: "STABLE",
          dateofsurgery: "08-09-2024",
          dateofdischarge: "14-09-2024",
          donordetails: "MRS MARIYAMMAL",
          donorageandsex: "52/F",
          dshid: "SH/22/208188 ",
          dbgroup: "O+",
        },
        {
          id: 14,
          rshid: "SH/24/252487",
          recipientdetails: "MRS JHOTHIKA  ",
          ageandsex: " 22/F",
          bgroup: "O+",
          relationship: "MOTHER ",
          torgan: "KIDNEY ",
          committeeapprovalno: "25/4/2024//6200/E6(1)2024",
          status: "STABLE",
          dateofsurgery: "22-09-2024",
          dateofdischarge: "30-09-2024",
          donordetails: "MRS VALLI     ",
          donorageandsex: "48/F",
          dshid: "SH/24/252488 ",
          dbgroup: "B+",
        },
        {
          id: 15,
          rshid: "SH/24/256759",
          recipientdetails: "MR STALIN",
          ageandsex: " 28/M",
          bgroup: "B+",
          relationship: "MOTHER ",
          torgan: "KIDNEY ",
          committeeapprovalno: "12/9/2024//14514/E8/2024",
          status: "STABLE",
          dateofsurgery: "23-09-2024",
          dateofdischarge: "28-09-2024",
          donordetails: "MRS SUSEELA  ",
          donorageandsex: "",
          dshid: "SH/24/256760 ",
          dbgroup: "B+",
        },
        {
          id: 16,
          rshid: "SH/24/258131",
          recipientdetails: "MR  KRISHNAN",
          ageandsex: "",
          bgroup: "A+",
          relationship: "BROTHER",
          torgan: "KIDNEY ",
          committeeapprovalno: "26/9/2024//15222/E8/2024",
          status: "STABLE",
          dateofsurgery: "15-10-2024",
          dateofdischarge: "21-10-2024",
          donordetails: "MR ARUMUGAM  ",
          donorageandsex: "",
          dshid: "SH/24/262566 ",
          dbgroup: "A+",
        },
        {
          id: 17,
          rshid: "SH/24/260154",
          recipientdetails: "MS SIVASANKARI",
          ageandsex: "39/F",
          bgroup: "O+",
          relationship: "CADAVER",
          torgan: "KIDNEY ",
          committeeapprovalno: "TNOS 29859",
          status: "STABLE",
          dateofsurgery: "10-11-2024",
          dateofdischarge: "20-11-2024",
          donordetails: "MR KUMARAVADIVEL    ",
          donorageandsex: "55/M",
          dshid: "TNOS D/ID/8070 ",
          dbgroup: "O+",
        },
        {
          id: 18,
          rshid: "SH/23/232667",
          recipientdetails: "MRS KOWSALYA",
          ageandsex: "28/M",
          bgroup: "B+",
          relationship: "CADAVER",
          torgan: "KIDNEY ",
          committeeapprovalno: "TNOS 38209",
          status: "STABLE",
          dateofsurgery: "28-11-2024",
          dateofdischarge: "04-12-2024",
          donordetails: "MR MADHU",
          donorageandsex: "54/M ",
          dshid: "TNOS D/ID/9088 ",
          dbgroup: "B+",
        },
        {
          id: 19,
          rshid: "SH/24/265977",
          recipientdetails: "MR MANIKANDAN",
          ageandsex: "39/M",
          bgroup: "A+",
          relationship: "FATHER IN LAW",
          torgan: "KIDNEY ",
          committeeapprovalno: "14/11/2024//18588/E8/2024",
          status: "STABLE",
          dateofsurgery: "9-12-2024",
          dateofdischarge: "14-12-2024",
          donordetails: "MR KRISHNASAMY ",
          donorageandsex: "65/M",
          dshid: "SH/24/265978 ",
          dbgroup: "A+",
        },
      ],
    },
    2023: {
      totalDonors: 8,
      donors: [
        
        // New data

        {
          id: 1,
          rshid: "SH/23/220888",
          recipientdetails: "MR MATHIYALAGAN ",
          ageandsex: "31/M",
          bgroup: "O+",
          relationship: "FATHER ",
          torgan: "KIDNEY ",
          committeeapprovalno: "16/12/2022/110130H&DII/4/2022",
          status: "STABLE",
          dateofsurgery: "01-11-2023",
          dateofdischarge: "17/01/2023",
          donordetails: "MR GOVINDARAJ",
          donorageandsex: "55/M",
          dshid: "SH/22/220889",
          dbgroup: "O+",
        },
        {
          id: 2,
          rshid: "SH/22/216444",
          recipientdetails: "MR SATHISHKUMAR",
          ageandsex: "30/M",
          bgroup: "O+",
          relationship: "MOTHER",
          torgan: "KIDNEY ",
          committeeapprovalno: "5/1/2023//142/E6/2023",
          status: "STABLE",
          dateofsurgery: "13-02-2023",
          dateofdischarge: "22/02/2023",
          donordetails: "MRS SHANTHI",
          donorageandsex: "57/F",
          dshid: "SH/22/216445",
          dbgroup: "O+",
        },
        {
          id: 3,
          rshid: "SH/19/118089",
          recipientdetails: "MR RAVICHANDRAN",
          ageandsex: "58/M",
          bgroup: "A+",
          relationship: "MOTHER ",
          torgan: "KIDNEY",
          committeeapprovalno: "9/2/2023//1397/E6/2023",
          status: "STABLE",
          dateofsurgery: "15-04-2023",
          dateofdischarge: "26/04/2023",
          donordetails: "MRS SARASWATHI ",
          donorageandsex: "74/F",
          dshid: "SH/22/213609",
          dbgroup: "A+",
        },
        {
          id: 4,
          rshid: "SH/23/220645",
          recipientdetails: "MR THANGARASU",
          ageandsex: "49/M",
          bgroup: "B+",
          relationship: "MOTHER",
          torgan: "KIDNEY",
          committeeapprovalno: "23/2/2023//1396/E6/2023",
          status: "STABLE",
          dateofsurgery: "28-04-2023",
          dateofdischarge: "08/05/2023",
          donordetails: "MRS SARASAYEE ",
          donorageandsex: "70/F",
          dshid: "SH/23/220644",
          dbgroup: "O+",
        },
        {
          id: 5,
          rshid: "SH/22/218644",
          recipientdetails: "MRS JAYALAKSHMI",
          ageandsex: "35/F",
          bgroup: "O+",
          relationship: "FATHER ",
          torgan: "KIDNEY",
          committeeapprovalno: "4/5/2023//6028/E6/2023",
          status: "STABLE",
          dateofsurgery: "10-07-2023",
          dateofdischarge: "19/07/2023",
          donordetails: "MR MANICKAM ",
          donorageandsex: "65/M",
          dshid: "SH/22/218647",
          dbgroup: "O+",
        },
        {
          id: 6,
          rshid: "SH/23/234239",
          recipientdetails: "SELVI .DHANUSHREE",
          ageandsex: "15/F",
          bgroup: "A+",
          relationship: "SWAP",
          torgan: "KIDNEY",
          committeeapprovalno: "24/8/2023//12069/E6/2023",
          status: "STABLE",
          dateofsurgery: "08-09-2023",
          dateofdischarge: "19/09/2023",
          donordetails: "MRS PARAMESWARI   ",
          donorageandsex: "48/F",
          dshid: "SSH/23/238614",
          dbgroup: "A+",
        },
        {
          id: 7,
          rshid: "SH/22/199960",
          recipientdetails: "MR GOVINDASAMY",
          ageandsex: "56/F",
          bgroup: "B+",
          relationship: "SWAP ",
          torgan: "KIDNEY",
          committeeapprovalno: "24/8/2023//12069/E6/2023",
          status: "STABLE",
          dateofsurgery: "08-09-2023",
          dateofdischarge: "19/09/2023",
          donordetails: "MRS JAYALAKSHMI",
          donorageandsex: "45/F",
          dshid: "SH/21/193186",
          dbgroup: "B+",
        },
        {
          id: 8,
          rshid: "SH/23/233153",
          recipientdetails: "MR ANBUKUMAR",
          ageandsex: "M/45",
          bgroup: "B+",
          relationship: "MOTHER",
          torgan: "KIDNEY",
          committeeapprovalno: "27/7/2023//10687/E6/2023",
          status: "STABLE",
          dateofsurgery: "19-10-2023",
          dateofdischarge: "30/10/2023",
          donordetails: "MRS MALARKODI",
          donorageandsex: "60/F",
          dshid: "SH/23/233153",
          dbgroup: "AB+",
        },
      ],
    },
    2022: {
      totalDonors: 2,
      donors: [
        // {  
        //   id: 1,
        //   shid: "SH/22/206656",
        //   name: "MR Siva",
        //   age: "29/M",
        //   bGroup: "O+",
        //   relationship: "Mother",
        //   organ: "KIDNEY",
        //   committee: "21/4/2022/5141/E6/2022	",
        //   status: "STABLE",
        //   dateOfSurgery: "	13-05-2022",
        //   dateOfDischarge: "24-05-2022",
        // },
        // {
        //   id: 2,
        //   shid: "SH/22/199367",
        //   name: "MR. KrishnaMoorthy",
        //   age: "52/M",
        //   bGroup: "B+",
        //   relationship: "Sister",
        //   organ: "KIDNEY",
        //   committee: "28/4/2022/4576/E6/2022",
        //   status: "STABLE",
        //   dateOfSurgery: "18-06-2022",
        //   dateOfDischarge: "28-06-2022",
        // },

        // new data
        {
          id: 1,
          rshid: "SH/22/206656",
          recipientdetails: "MR SIVA",
          ageandsex: "29/M",
          bgroup: "O+",
          relationship: "MOTHER",
          torgan: "KIDNEY",
          committeeapprovalno: "21/4/2022//5141/E6/2022",
          status: "STABLE",
          dateofsurgery: "13-05-2022",
          dateofdischarge: "24-05-2022",
          donordetails: "MRS.VIJAYARARI",
          donorageandsex: "49/F",
          dshid: "SH/22/206657",
          dbgroup: "O+",
        },
        {
          id: 2,
          rshid: "SH/22/199367",
          recipientdetails: "MR KRISHNAMOORTHY",
          ageandsex: "52/M",
          bgroup: "B+",
          relationship: "SISTER",
          torgan: "KIDNEY ",
          committeeapprovalno: "28/4/2022//4576/E6/2022",
          status: "STABLE",
          dateofsurgery: "18-06-2022",
          dateofdischarge: "28/06/2022",
          donordetails: "MRS.SOUNDARI",
          donorageandsex: "57/F",
          dshid: "SH/22/199174",
          dbgroup: "O+",
        },
      ],
    },
  };

  const getFilteredDonors = () => {
    if (selectedYear === "All") {
      return Object.values(donorData).flatMap((yearData) => yearData.donors);
    }
    return donorData[selectedYear]?.donors || [];
  };

  const filteredDonors = getFilteredDonors();
  const availableYears = Object.keys(donorData);

  // Pagination logic
  const indexOfLastDonor = currentPage * donorsPerPage;
  const indexOfFirstDonor = indexOfLastDonor - donorsPerPage;
  const currentDonors = filteredDonors.slice(
    indexOfFirstDonor,
    indexOfLastDonor
  );
  const totalPages = Math.ceil(filteredDonors.length / donorsPerPage);

  const handleViewDonor = (donor) => {
    setSelectedDonor(donor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDonor(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4 md:p-0 min-h-screen my-16">
      <div className="rounded-lg overflow-hidden">
        {/* Header */}
        <div className="text-black flex justify-between items-center pb-4">
          <h1 className="text-[24px] font-bold">Donor List</h1>
          <div className="flex gap-4">
            <div className="relative">
              <select
                value={selectedYear}
                onChange={(e) => {
                  setSelectedYear(e.target.value);
                  setCurrentPage(1); // reset page when year changes
                }}
                className="appearance-none bg-white text-black px-3 md:px-4 py-2 pr-8 rounded-md  "
              >
                <option value="All">All</option>
                {availableYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto overflow-y-auto w-full scrollbar-hide">
          <table className="min-w-[1200px] w-full table-auto">
            <thead className="bg-[#2B3990]">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  S.no
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  R/SHID
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Recipient Details
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Age/Sex
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  B-Group
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Relationship
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  T/Organ
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Committee/Approval no
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Date of Surgery
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Date of Discharge
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Patient Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-blue-100">
              {currentDonors.map((donor, index) => (
                <tr
                  key={`${donor.rshid}-${index}`}
                  className="hover:bg-blue-50 transition-colors duration-150"
                >
                  <td className="px-4 py-3 text-sm text-black-900">
                    {String(indexOfFirstDonor + index + 1).padStart(2, "0")}
                  </td>
                  <td className="px-4 py-3 text-sm text-black-900 font-medium">
                    {donor.rshid}
                  </td>
                  <td className="px-4 py-3 text-sm text-black-900 font-medium">
                    {donor.recipientdetails}
                  </td>
                  <td className="px-4 py-3 text-sm text-black-600">
                    {donor.ageandsex}
                  </td>
                  <td className="px-4 py-3 text-sm text-black-600">
                    {donor.bgroup}
                  </td>
                  <td className="px-4 py-3 text-sm text-black-600">
                    {donor.relationship}
                  </td>
                  <td className="px-4 py-3 text-sm text-black-600 font-medium">
                    {donor.torgan}
                  </td>
                  <td className="px-4 py-3 text-sm text-black-600">
                    {donor.committeeapprovalno}
                  </td>
                  <td className="px-4 py-3 text-sm text-black-600">
                    {donor.dateofsurgery}
                  </td>
                  <td className="px-4 py-3 text-sm text-black-600">
                    {donor.dateofdischarge}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span className="px-2 py-1 rounded-full text-sm font-medium">
                      {donor.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <button
                      onClick={() => handleViewDonor(donor)}
                      className="text-blue-900 hover:text-blue-900 underline gap-1 text-xs font-medium whitespace-nowrap"
                    >
                      View Donor
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-4 flex-wrap">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 rounded-md border ${
                currentPage === i + 1
                  ? "bg-blue-900 text-white"
                  : "bg-white text-blue-900 border-blue-900"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedDonor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-2 sm:mx-4">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">
                View Donor
              </h2>
              <button
                onClick={closeModal}
                className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-medium text-gray-900 mb-2">
                  Donor ID
                </div>
                <div className="text-sm text-gray-500">
                  {selectedDonor.dshid}
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900 mb-2">
                  Donor Name
                </div>
                <div className="text-sm text-gray-500">
                  {selectedDonor.donordetails}
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900 mb-2">
                  Donor Age / Sex
                </div>
                <div className="text-sm text-gray-500">{selectedDonor.donorageandsex}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900 mb-2">
                  Donor Blood Group
                </div>
                <div className="text-sm text-gray-500">
                  {selectedDonor.dbgroup}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonorDataTable;
