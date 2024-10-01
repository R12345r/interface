import React, { useState, useEffect, useRef } from "react";


export const Details = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [openFaq, setOpenFaq] = useState(null);
  // References to each section
  const overviewRef = useRef(null);
  const highlightsRef = useRef(null);
  const roomsRef = useRef(null);
  const amenitiesRef = useRef(null);
  const reviewsRef = useRef(null);
  const gallerysRef = useRef(null);
  const locationRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const faqsRef = useRef(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);


  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Toggle the dropdown on click
  };
  const rooms = [
    "https://c.animaapp.com/s3bftybd/img/rectangle-7@2x.png",
    "https://c.animaapp.com/s3bftybd/img/rectangle-55@2x.png",
    "https://c.animaapp.com/s3bftybd/img/rectangle-56@2x.png",
    "https://c.animaapp.com/s3bftybd/img/rectangle-7@2x.png",
    "https://c.animaapp.com/s3bftybd/img/rectangle-55@2x.png",
    "https://c.animaapp.com/s3bftybd/img/rectangle-56@2x.png"
  ];

  const slidesToShow = 3; // Number of images to show
  const totalSlides = rooms.length - slidesToShow;

  const handlePrevClicke = () => {
    // Move left (show previous group of images)
    setCurrentSlide((prevIndex) => (prevIndex === 0 ? totalSlides : prevIndex - 1));
  };

  const handleNextClickt = () => {
    // Move right (show next group of images)
    setCurrentSlide((prevIndex) => (prevIndex === totalSlides ? 0 : prevIndex + 1));
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleFaq = (faqIndex) => {
    // Toggle the selected FAQ based on its index
    setOpenFaq(openFaq === faqIndex ? null : faqIndex);
  };
  useEffect(() => {
    if (menuOpen) {
      setMenuOpen(false); // Close the menu if it was open
    }
  }, []);
  const toggleGallery = () => {
    setIsGalleryOpen(!isGalleryOpen);
  };
  const scrollToSection = (ref) => {

    if (ref && ref.current) {

      const sectionTop = ref.current.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: sectionTop - 72,
        behavior: 'smooth',
      });
    }
  };
  const reviews = [
    {
      name: 'Raghul. R',
      date: '30.08.2024',
      ratingImg: 'https://c.animaapp.com/s3bftybd/img/pngwing-com--1--1-1@2x.png',
      reviewText: 'Lörem ipsum rent intraluna saskapet, har sor. Nin spen, nis prektig fade. Astrorade inaskad polyling edor är jugt.',
    },
    {
      name: 'Sara J.',
      date: '25.07.2024',
      ratingImg: 'https://c.animaapp.com/s3bftybd/img/pngwing-com--1--1-1@2x.png',
      reviewText: 'This is a fantastic product. I absolutely love it!',
    },
    {
      name: 'John D.',
      date: '14.06.2024',
      ratingImg: 'https://c.animaapp.com/s3bftybd/img/pngwing-com--1--1-1@2x.png',
      reviewText: 'Good quality and fast shipping. Will definitely recommend it.',
    },
  ];

  // Function to go to the previous review
  const handlePrevClick = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  // Function to go to the next review
  const handleNextClick = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };


  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <div className="w-full h-[72px] bg-primary-1 flex items-center justify-center [font-family:'Mohave',Helvetica]">
        <div className="flex w-full max-w-[1440px] h-[72px] items-center justify-between px-4 md:px-[100px]">
          <div className="font-bold text-secondary-2 text-2xl tracking-[2.40px]">HISTAY</div>
          <div className="hidden md:flex gap-7">
            <div className="font-semibold text-secondary-2 text-base tracking-[1.60px]">HOME</div>
            <div className="font-medium text-white text-base tracking-[1.60px]">ABOUT US</div>
            <div className="font-medium text-white text-base tracking-[1.60px]">DESTINATION</div>
            <div className="font-medium text-white text-base tracking-[1.60px]">PACKAGES</div>
            <div className="font-medium text-white text-base tracking-[1.60px]">CONTACT US</div>
          </div>
          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center ">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg cursor-pointer" onClick={toggleDropdown}>
            <span className="font-medium text-primary-1 text-base text-center tracking-[1.60px]">HI, GUEST</span>
        
            <img
              className={`w-[13.12px] h-[9.6px] transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`} // Conditional rotation
              alt="Dropdown Icon"
              src="https://c.animaapp.com/s3bftybd/img/vector-1.svg"
            />
            {dropdownOpen && (
              <div className="absolute top-12 w-[200px] bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                <div className="flex flex-col py-2">
                  <span className="px-4 py-2 text-gray-800 cursor-pointer hover:bg-gray-200">Profile</span>
                  <span className="px-4 py-2 text-gray-800 cursor-pointer hover:bg-gray-200">Settings</span>
                  <span className="px-4 py-2 text-gray-800 cursor-pointer hover:bg-gray-200">Logout</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary-1 w-full flex flex-col items-center py-5">
          <div className="font-medium text-secondary-2 text-base tracking-[1.60px] py-2">HOME</div>
          <div className="font-medium text-white text-base tracking-[1.60px] py-2">ABOUT US</div>
          <div className="font-medium text-white text-base tracking-[1.60px] py-2">DESTINATION</div>
          <div className="font-medium text-white text-base tracking-[1.60px] py-2">PACKAGES</div>
          <div className="font-medium text-white text-base tracking-[1.60px] py-2">CONTACT US</div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg cursor-pointer mt-4">
            <span className="font-medium text-primary-1 text-base text-center tracking-[1.60px]">HI, GUEST</span>
            <img className="w-[13.12px] h-[9.6px]" alt="Dropdown Icon" src="https://c.animaapp.com/s3bftybd/img/vector-1.svg" />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-grow w-full max-w-[1440px] mx-auto px-4 md:px-[100px]">
        {/* Breadcrumb Section */}
        <p className="mt-4 text-xs md:text-sm lg:text-base [font-family:'Mohave',Helvetica]">
          <span className="text-[#222222]">HOME &gt; OOTY &gt; </span>
          <span className="font-semibold text-[#2e3961]">THE BLACK FOREST</span>
        </p>

        {/* Main Details Section */}
        <div className="flex w-full items-end justify-between mt-8 flex-wrap md:flex-nowrap [font-family:'Mohave',Helvetica]">
          <div className="inline-flex flex-col items-start justify-center gap-2">
            <div className="font-playfair font-medium text-heading-1 text-xl md:text-3xl lg:text-4xl">The Black Forest</div>
            <div className="font-mohave font-normal text-sm md:text-lg lg:text-xl">Ooty, Tamilnadu</div>
          </div>
          <div className="inline-flex items-end justify-end gap-5 md:gap-10 mt-4 md:mt-0">
            <div className="flex flex-col w-[80px] md:w-[120.29px] items-start gap-1.5">
              <div className="font-normal text-black text-sm md:text-base lg:text-xl text-center">5.0 RATING (32)</div>
              <img className="w-full h-[15px] md:h-[19.65px] object-cover" alt="Rating" src="https://c.animaapp.com/s3bftybd/img/pngwing-com--1--1@2x.png" />
            </div>
            <img className="h-4 md:h-6 lg:h-8" alt="Frame" src="https://c.animaapp.com/s3bftybd/img/frame-309.svg" />
          </div>
        </div>

        {/* Main Image and Photo Gallery Section */}

        {/* Main Image and Photo Gallery Section */}
        <div className=" min-h-screen-75 flex flex-col bg-white">
          {/* Main Image and Photo Gallery Section */}
          <div ref={gallerysRef} className="relative w-full h-auto md:h-[460px] lg:h-[632px] mx-auto mt-8">
            <img
              className="w-full h-auto object-cover"
              alt="Black Forest"
              src="https://c.animaapp.com/s3bftybd/img/rectangle-49.svg"
            />
            <div
              onClick={toggleGallery}
              className="cursor-pointer absolute bottom-4 left-4 md:left-auto md:right-4 lg:right-4 bg-black bg-opacity-50 text-white py-1 px-3 rounded-md font-bold text-xs md:text-sm lg:text-lg tracking-wide"
            >
              20+ Photos
            </div>
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full mt-3">
              <img
                className="w-full h-32 md:h-40 object-cover"
                alt="Black Forest"
                src="https://c.animaapp.com/s3bftybd/img/rectangle-50.svg"
              />
              <img
                className="w-full h-32 md:h-40 object-cover"
                alt="Black Forest"
                src="https://c.animaapp.com/s3bftybd/img/rectangle-51.svg"
              />
              <img
                className="w-full h-32 md:h-40 object-cover"
                alt="Black Forest"
                src="https://c.animaapp.com/s3bftybd/img/rectangle-52.svg"
              />
              <img
                className="w-full h-32 md:h-[168px] object-cover"
                alt="Black Forest"
                src="https://c.animaapp.com/s3bftybd/img/rectangle-53@2x.png"
              />
            </div>
          </div>

          {/* Gallery Modal */}
          {isGalleryOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
              <div className="relative w-full max-w-6xl p-5 md:p-8">
                <button
                  onClick={toggleGallery}
                  className="absolute top-4 right-4 text-white text-2xl font-bold"
                >
                  &times;
                </button>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <img
                    className="w-full h-auto object-cover"
                    alt="Black Forest"
                    src="https://c.animaapp.com/s3bftybd/img/rectangle-49.svg"
                  />
                  <img
                    className="w-full h-auto object-cover"
                    alt="Black Forest"
                    src="https://c.animaapp.com/s3bftybd/img/rectangle-50.svg"
                  />
                  <img
                    className="w-full h-auto object-cover"
                    alt="Black Forest"
                    src="https://c.animaapp.com/s3bftybd/img/rectangle-51.svg"
                  />
                  <img
                    className="w-full h-auto object-cover"
                    alt="Black Forest"
                    src="https://c.animaapp.com/s3bftybd/img/rectangle-52.svg"
                  />
                  <img
                    className="w-full h-auto object-cover"
                    alt="Black Forest"
                    src="https://c.animaapp.com/s3bftybd/img/rectangle-53@2x.png"
                  />
                  <img
                    className="w-full h-auto object-cover"
                    alt="Black Forest"
                    src="https://c.animaapp.com/s3bftybd/img/rectangle-49.svg"
                  />
                  {/* Add more images as needed */}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Tab Navigation */}

        <div className="inline-flex items-center gap-2 md:gap-[60px] mt-8 flex-wrap justify-center md:justify-start">
          <div
            className={`font-medium text-base md:text-lg lg:text-xl cursor-pointer [font-family:'Mohave',Helvetica] ${activeSection === 'overview'
              ? 'text-heading-1 underline custom-underline-offset'
              : 'text-[#333333]'
              }`}
            onClick={() => {
              scrollToSection(overviewRef);
              setActiveSection('overview');
            }}
          >
            Overview
          </div>
          <div
            className={`font-medium text-base md:text-lg lg:text-xl cursor-pointer [font-family:'Mohave',Helvetica]${activeSection === 'highlights'
              ? 'text-heading-1 underline custom-underline-offset'
              : 'text-[#333333]'
              }`}
            onClick={() => {
              scrollToSection(highlightsRef);
              setActiveSection('highlights');
            }}
          >
            Highlights
          </div>
          <div
            className={`font-medium text-base md:text-lg lg:text-xl cursor-pointer [font-family:'Mohave',Helvetica]${activeSection === 'rooms'
              ? 'text-heading-1 underline custom-underline-offset'
              : 'text-[#333333]'
              }`}
            onClick={() => {
              scrollToSection(roomsRef);
              setActiveSection('rooms');
            }}
          >
            Rooms
          </div>
          <div
            className={`font-medium text-base md:text-lg lg:text-xl cursor-pointer [font-family:'Mohave',Helvetica] ${activeSection === 'amenities'
              ? 'text-heading-1 underline custom-underline-offset'
              : 'text-[#333333]'
              }`}
            onClick={() => {
              scrollToSection(amenitiesRef);
              setActiveSection('amenities');
            }}
          >
            Amenities
          </div>
          <div
            className={`font-medium text-base md:text-lg lg:text-xl cursor-pointer [font-family:'Mohave',Helvetica]  ${activeSection === 'reviews'
              ? 'text-heading-1 underline custom-underline-offset'
              : 'text-[#333333]'
              }`}
            onClick={() => {
              scrollToSection(reviewsRef);
              setActiveSection('reviews');
            }}
          >
            Reviews
          </div>
          <div
            className={`font-medium text-base md:text-lg lg:text-xl cursor-pointer [font-family:'Mohave',Helvetica]  ${activeSection === 'gallery'
              ? 'text-heading-1 underline custom-underline-offset'
              : 'text-[#333333]'
              }`}
            onClick={() => {
              scrollToSection(gallerysRef);
              setActiveSection('gallery');
            }}
          >
            Gallery
          </div>
          <div
            className={`font-medium text-base md:text-lg lg:text-xl cursor-pointer [font-family:'Mohave',Helvetica]  ${activeSection === 'location'
              ? 'text-heading-1 underline custom-underline-offset'
              : 'text-[#333333]'
              }`}
            onClick={() => {
              scrollToSection(locationRef);
              setActiveSection('location');
            }}
          >
            Location
          </div>
          <div
            className={`font-medium text-base md:text-lg lg:text-xl cursor-pointer [font-family:'Mohave',Helvetica]  ${activeSection === 'faqs'
              ? 'text-heading-1 underline custom-underline-offset'
              : 'text-[#333333]'
              }`}
            onClick={() => {
              scrollToSection(faqsRef);
              setActiveSection('faqs');
            }}
          >
            FAQs
          </div>
        </div>



        {/* Divider Section */}
        <div className="mt-3">
          <img className="w-full" alt="Line" src="https://c.animaapp.com/s3bftybd/img/line-9.svg" />
        </div>


        <div className="flex flex-col lg:flex-row justify-between items-start mt-8 gap-8">

          <div ref={highlightsRef} className="flex-[2]">
            {/* Guest, Room, Bath, Meals Section */}
            <div className="inline-flex items-start gap-4 md:gap-8 flex-wrap [font-family:'Mohave',Helvetica]">
              <div className="inline-flex items-center justify-center gap-2 flex-col md:flex-row ">
                <img className="w-6 md:w-8 h-6 md:h-8 lg:w-10 lg:h-10 object-cover" alt="Guests" src="https://c.animaapp.com/s3bftybd/img/owners-1@2x.png" />
                <div className="font-medium text-black text-xs md:text-sm lg:text-[15px] text-center">10<br />Guest</div>
              </div>
              <div className="inline-flex items-center justify-center gap-2 flex-col md:flex-row">
                <img className="w-6 md:w-8 h-6 md:h-8 lg:w-10 lg:h-10 object-cover" alt="Rooms" src="https://c.animaapp.com/s3bftybd/img/double-bed-8954865-1@2x.png" />
                <div className="font-medium text-black text-xs md:text-sm lg:text-[15px] text-center">03<br />Room</div>
              </div>
              <div className="inline-flex items-center justify-center gap-2 flex-col md:flex-row">
                <img className="w-6 md:w-8 h-6 md:h-8 lg:w-10 lg:h-10 object-cover" alt="Baths" src="https://c.animaapp.com/s3bftybd/img/bathtub-8955073-1@2x.png" />
                <div className="font-medium text-black text-xs md:text-sm lg:text-[15px] text-center">04<br />Bath</div>
              </div>
              <div className="inline-flex items-center justify-center gap-2 flex-col md:flex-row">
                <img className="w-6 md:w-8 h-6 md:h-8 lg:w-10 lg:h-10 object-cover" alt="Meals" src="https://c.animaapp.com/s3bftybd/img/eating-3959463-1@2x.png" />
                <div className="font-medium text-black text-xs md:text-sm lg:text-[15px] text-center">03<br />Meals</div>
              </div>
            </div>

            {/* Property Overview Section */}
            <div ref={overviewRef} className="mt-8 px-4 md:px-0 [font-family:'Mohave',Helvetica]">
              <div className="font-semibold text-heading-1 text-lg md:text-xl lg:text-2xl">Property Overview</div>
              <p className="w-full font-normal text-xs md:text-sm lg:text-base text-justify md:text-left leading-7 mt-4">
                Lörem ipsum rent intraluna saskapet, har sor. Nin spen, nis prektig fade. Astrorade inaskad polyling edor är jugt. Ogt georäll et fagyng. Sejesamma infrana, liksom spena. Lörem ipsum rent intraluna saskapet, har sor. Nin spen, nis prektig fade. Astrorade inaskad polyling edor är jugt. Ogt georäll et fagyng. Sejesamma infrana, liksom spena. Lörem ipsum rent intraluna saskapet, har sor. Nin spen, nis prektig fade. Astrorade inaskad polyling edor är jugt. Ogt georäll et fagyng. Sejesamma infrana, liksom spena. Lörem ipsum rent intraluna saskapet, har sor. Nin spen, nis prektig fade. Astrorade inaskad polyling edor är jugt. Ogt georäll et fagyng. Sejesamma infrana, liksom spena.
              </p>
            </div>

            {/* Amenities Section */}
            <div ref={amenitiesRef} className="mt-8 px-4 md:px-0 [font-family:'Mohave',Helvetica]">
              <div className="font-semibold text-heading-1 text-lg md:text-xl lg:text-2xl">Amenities</div>
              <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-2 mt-4">
                <div className="flex items-center gap-2 md:gap-[14.4px]">
                  <img className="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 object-cover" alt="AC" src="https://c.animaapp.com/s3bftybd/img/bath-16528575@2x.png" />
                  <div className="font-normal text-smallfont text-xs md:text-sm lg:text-[19.2px] whitespace-nowrap">AC in Bedrooms</div>
                </div>
                <div className="flex items-center gap-2 md:gap-[14.4px]">
                  <img className="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 object-cover" alt="Wi-Fi" src="https://c.animaapp.com/s3bftybd/img/computer-16528541@2x.png" />
                  <div className="font-normal text-smallfont text-xs md:text-sm lg:text-[19.2px] whitespace-nowrap">Wi-Fi Connectivity</div>
                </div>
                <div className="flex items-center gap-2 md:gap-[14.4px]">
                  <img className="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 object-cover" alt="Pool" src="https://c.animaapp.com/s3bftybd/img/connection-16528563@2x.png" />
                  <div className="font-normal text-smallfont text-xs md:text-sm lg:text-[19.2px] whitespace-nowrap">Swimming Pool</div>
                </div>
                <div className="flex items-center gap-2 md:gap-[14.4px]">
                  <img className="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 object-cover" alt="Room Service" src="https://c.animaapp.com/s3bftybd/img/food-16528552@2x.png" />
                  <div className="font-normal text-smallfont text-xs md:text-sm lg:text-[19.2px] whitespace-nowrap">Room Service</div>
                </div>
                <div className="flex items-center gap-2 md:gap-[14.4px]">
                  <img className="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 object-cover" alt="Parking" src="https://c.animaapp.com/s3bftybd/img/water-16528599@2x.png" />
                  <div className="font-normal text-smallfont text-xs md:text-sm lg:text-[19.2px] whitespace-nowrap">Free Parking</div>
                </div>
                <div className="flex items-center gap-2 md:gap-[14.4px]">
                  <img className="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 object-cover" alt="Restaurant" src="https://c.animaapp.com/s3bftybd/img/air-conditioning-3653288@2x.png" />
                  <div className="font-normal text-smallfont text-xs md:text-sm lg:text-[19.2px] whitespace-nowrap">Restaurant</div>
                </div>
              </div>
            </div>

            {/* Book Now Section */}
            <div className="relative w-full h-[60px] mt-36 md:static lg:sticky md:top-[1500px] lg:left-0 [font-family:'Mohave',Helvetica]">
              <div className="relative w-full h-[60px] bg-[#e1e5f4] rounded-lg">
                <div className="inline-flex items-center justify-center gap-2.5 p-2.5 absolute top-3.5 right-4 md:left-auto lg:right-4 rounded-lg border border-solid border-black">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Mohave',Helvetica] font-normal text-black text-base tracking-[0] leading-[18.0px] whitespace-nowrap">
                    BOOK NOW
                  </div>
                </div>
                <p className="absolute top-6 left-7 [font-family:'Mohave',Helvetica] font-normal text-black text-xs md:text-sm lg:text-lg tracking-[0] leading-[18.0px] whitespace-nowrap">
                  BOOK NOW AND GET 10% OFF ON WEEKDAYS
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Reservation Form */}
          <div className="w-full md:w-[420px] h-auto flex-shrink-0 items-center gap-2.5 px-5 py-10 bg-[#e1e5f4] rounded-2xl border-[0.6px] border-solid border-line shadow-[0px_0px_28px_#0000000f]">
            <div className="flex flex-col w-full h-auto items-start gap-8 [font-family:'Mohave',Helvetica]">
              <p className="font-semibold text-heading-1 text-lg md:text-2xl leading-[normal]">Reserve Now, Get Offer!</p>
              <div className="flex flex-col items-start gap-7 w-full">
                <div className="flex flex-col items-start gap-5 w-full">
                  <div className="flex items-center gap-2.5 px-5 py-4 bg-white rounded w-full">
                    <label className="font-normal text-smallfont text-sm md:text-base leading-[18.0px] whitespace-nowrap" htmlFor="name">Name</label>
                    <input type="text" id="name" className="w-full border-none focus:outline-none" />
                  </div>
                  <div className="flex items-center gap-2.5 px-5 py-4 bg-white rounded w-full">
                    <label className="font-normal text-smallfont text-sm md:text-base leading-[18.0px] whitespace-nowrap" htmlFor="email">Mail Id</label>
                    <input type="email" id="email" className="w-full border-none focus:outline-none" />
                  </div>
                  <div className="flex items-center gap-2.5 px-5 py-4 bg-white rounded w-full">
                    <label className="font-normal text-smallfont text-sm md:text-base leading-[18.0px] whitespace-nowrap" htmlFor="contactNumber">Contact Number</label>
                    <input type="tel" id="contactNumber" className="w-full border-none focus:outline-none" />
                  </div>
                  <div className="flex items-center gap-2.5 px-5 py-4 bg-white rounded w-full">
                    <label className="font-normal text-smallfont text-sm md:text-base leading-[18.0px] whitespace-nowrap" htmlFor="adults">No. of Adults</label>
                    <input type="number" id="adults" className="w-full border-none focus:outline-none" />
                  </div>
                  <div className="flex items-center gap-2.5 px-5 py-4 bg-white rounded w-full">
                    <label className="font-normal text-smallfont text-sm md:text-base leading-[18.0px] whitespace-nowrap" htmlFor="children">No. of Children</label>
                    <input type="number" id="children" className="w-full border-none focus:outline-none" />
                  </div>
                  <div className="flex items-center gap-2.5 px-5 py-4 bg-white rounded w-full">
                    <label className="font-normal text-smallfont text-sm md:text-base leading-[18.0px] whitespace-nowrap" htmlFor="checkInDate">Check-in Date</label>
                    <input type="date" id="checkInDate" className="w-full border-none focus:outline-none" />
                  </div>
                </div>
                <div className="flex flex-col items-start gap-4 w-full">
                  <div className="flex items-center gap-5 w-full">
                    <div className="flex w-full md:w-[180px] items-center justify-center gap-2.5 px-5 py-2.5 bg-primary-1 rounded border border-solid border-primary-1">
                      <div className="font-semibold text-secondary-2 text-sm md:text-lg leading-[18.0px]">Call Now</div>
                    </div>
                    <div className="flex w-full md:w-[180px] items-center justify-center gap-2.5 px-5 py-2.5 bg-primary-1 rounded border border-solid border-primary-1">
                      <div className="font-semibold text-secondary-2 text-sm md:text-lg leading-[18.0px]">Submit</div>
                    </div>
                  </div>
                  <p className="text-smallfont text-xs leading-5">Our team will contact you shortly for the further booking process.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rooms Section */}
        <div ref={roomsRef} className="flex flex-col w-full md:w-[760px] items-start gap-5 mt-0 [font-family:'Mohave',Helvetica]">
          <div className="self-stretch font-semibold text-heading-1 text-lg md:text-xl lg:text-2xl">Rooms</div>
          <div className="flex items-center justify-between w-full">
            <img
              className="w-6 h-6 md:w-[26.67px] md:h-[26.67px] cursor-pointer"
              alt="Previous Frame"
              src="https://c.animaapp.com/s3bftybd/img/frame-295.svg"
              onClick={handlePrevClicke}
            />
            <div className="relative overflow-hidden w-full">
              {/* Image Container */}
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }} // Slide effect
              >
                {rooms.map((room, index) => (
                  <img
                    key={index}
                    className="w-[160px] md:w-[200px] h-[120px] md:h-[160px] lg:w-[260px] lg:h-[200px] object-cover"
                    alt={`Room Image ${index + 1}`}
                    src={room}
                  />
                ))}
              </div>
            </div>
            <img
              className="w-6 h-6 md:w-[26.67px] md:h-[26.67px] cursor-pointer"
              alt="Next Frame"
              src="https://c.animaapp.com/s3bftybd/img/frame-1.svg"
              onClick={handleNextClickt}
            />
          </div>
        </div>

        {/* Reviews Section */}

        <div>
          {/* Reviews Section */}
          <div ref={reviewsRef} className="flex flex-col w-full md:w-[760px] items-start gap-5 mt-8 [font-family:'Mohave',Helvetica]">
            <div className="self-stretch font-semibold text-heading-1 text-lg md:text-xl lg:text-2xl">Reviews</div>
            <div className="flex items-center justify-between w-full">
              {/* Previous Button */}
              <img
                className="w-6 h-6 md:w-[26.67px] md:h-[26.67px] cursor-pointer"
                alt="Previous Review"
                src="https://c.animaapp.com/s3bftybd/img/frame-295-1.svg"
                onClick={handlePrevClick}
              />

              {/* Review Content */}
              <div className="flex flex-col w-full md:w-[460px] items-start gap-5">
                <div className="flex items-center justify-between w-full">
                  <div className="inline-flex items-center gap-3">
                    <div className="w-6 h-6 md:w-10 md:h-10 bg-[#ffdada] rounded-full" />
                    <div className="flex flex-col items-start gap-[9px]">
                      <div className="font-medium text-[#222222] text-sm md:text-base">
                        {reviews[currentReviewIndex].name}
                      </div>
                      <div className="font-normal text-[#606969] text-[8px] md:text-[10px]">
                        {reviews[currentReviewIndex].date}
                      </div>
                    </div>
                  </div>
                  <img
                    className="w-[80px] md:w-[120.29px] h-[12px] md:h-[19.65px] object-cover"
                    alt="Rating"
                    src={reviews[currentReviewIndex].ratingImg}
                  />
                </div>
                <p className="w-full md:w-[460px] h-28 text-smallfont leading-7 font-normal text-xs md:text-base text-justify">
                  {reviews[currentReviewIndex].reviewText}
                </p>
              </div>

              {/* Next Button */}
              <img
                className="w-6 h-6 md:w-[26.67px] md:h-[26.67px] cursor-pointer"
                alt="Next Review"
                src="https://c.animaapp.com/s3bftybd/img/frame-1-1.svg"
                onClick={handleNextClick}
              />
            </div>
          </div>
        </div>


        {/* Location Section */}
        <div ref={locationRef} className="flex flex-col w-full md:w-[760px] items-start gap-5 mt-8 [font-family:'Mohave',Helvetica]">
          <div className="self-stretch font-semibold text-heading-1 text-lg md:text-xl lg:text-2xl">Location</div>
          <img className="w-full md:w-[760px] h-[160px] md:h-[200px] object-cover" alt="Map" src="https://c.animaapp.com/s3bftybd/img/---map-maker--udhagamandalam--tamil-nadu--india--standard-.png" />
        </div>

        {/* FAQs Section */}
        <div ref={faqsRef} className="flex flex-col w-full md:w-[760px] items-start gap-10 mt-8 pb-48 [font-family:'Mohave',Helvetica]">
          <div className="font-semibold text-heading-1 text-lg md:text-xl lg:text-2xl leading-[normal]">FAQs</div>
          <div className="gap-5 flex flex-col items-start w-full">
            {[
              { question: "Is Driver and/or House-Help accommodation available?", answer: "Yes, accommodation is available for drivers and house-help." },
              { question: "Is there separate accommodation for domestic help?", answer: "Yes, separate accommodation is provided for domestic help." },
              { question: "Is parking available onsite or nearby? Is it chargeable or free?", answer: "Yes, our tour packages to Ooty are designed to provide a comfortable and enjoyable experience. Depending on the package you choose, breakfast may be included at your accommodation. Please check the details of each package for specific inclusions." },
              { question: "Is the villa suitable for a day picnic?", answer: "Yes, the villa is suitable for a day picnic with prior arrangements." }
            ].map((faq, index) => (
              <div key={index} className="gap-6 flex flex-col items-start w-full">
                <div
                  className="flex items-center justify-between w-full cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <p className="w-full md:w-[800px] font-medium text-[#222222] text-base md:text-lg leading-[26.1px]">
                    {faq.question}
                  </p>
                  <img
                    className={`w-[18.83px] h-[10.83px] transition-transform duration-300 ${openFaq === index ? 'rotate-180' : 'rotate-0'}`}
                    alt="Toggle Icon"
                    src="https://c.animaapp.com/s3bftybd/img/vector-4.svg"
                  />
                </div>
                {openFaq === index && (
                  <p className="w-full md:w-[760px] font-normal text-smallfont text-xs md:text-base text-justify leading-[26px] mt-2">
                    {faq.answer}
                  </p>
                )}
                <img className="w-full md:w-[760px] h-px object-cover" alt="Line" src="https://c.animaapp.com/s3bftybd/img/line-3.svg" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full bg-primary-1 py-10 flex justify-center mt-auto [font-family:'Mohave',Helvetica]">
        <div className="w-full max-w-[1440px] px-4 md:px-[100px]">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-col w-full md:w-[243px] gap-5">
                <div className="font-bold text-secondary-2 text-2xl tracking-[2.40px][font-family:'Playfair Display']; ">HISTAY</div>
                <p className="text-neutral-50 text-xs md:text-base leading-[26px]">
                  Lörem ipsum rent intraluna saskapet, har sor. Nin spen, nis prektig fade. Astrorade inaskad polyling
                  edor är jugt. Ogt georäll et fagyng. Sejesamma infrana, liksom spena.
                </p>
              </div>
              <div className="flex flex-col gap-5 w-full md:w-auto mt-5 md:mt-0">
                <div className="font-medium text-neutral-50 text-lg md:text-xl">Helpful Links</div>
                <div className="flex flex-col gap-2">
                  <div className="text-neutral-50 text-xs md:text-base">OVERVIEW</div>
                  <div className="text-neutral-50 text-xs md:text-base">DOWNLOAD ITINERARY</div>
                  <div className="text-neutral-50 text-xs md:text-base">PRICE DETAILS</div>
                  <div className="text-neutral-50 text-xs md:text-base">ITINERARY</div>
                </div>
              </div>
              <div className="flex flex-col gap-5 w-full md:w-auto mt-5 md:mt-0">
                <div className="font-medium text-neutral-50 text-lg md:text-xl">Top Destinations</div>
                <div className="flex flex-col gap-2">
                  <div className="text-neutral-50 text-xs md:text-base">OOTY</div>
                  <div className="text-neutral-50 text-xs md:text-base">KODAIKANAL</div>
                  <div className="text-neutral-50 text-xs md:text-base">WAYANAD</div>
                  <div className="text-neutral-50 text-xs md:text-base">MUNNAR</div>
                  <div className="text-neutral-50 text-xs md:text-base">KOTTAGIRI</div>
                  <div className="text-neutral-50 text-xs md:text-base">COORG</div>
                  <div className="text-neutral-50 text-xs md:text-base">CHIKMAGALUR</div>
                </div>
              </div>
              <div className="flex flex-col gap-5 w-full md:w-auto mt-5 md:mt-0">
                <div className="font-medium text-neutral-50 text-lg md:text-xl">Top Recommended</div>
                <div className="flex flex-col gap-2">
                  <div className="text-neutral-50 text-xs md:text-base">OOTY</div>
                  <div className="text-neutral-50 text-xs md:text-base">KODAIKANAL</div>
                  <div className="text-neutral-50 text-xs md:text-base">WAYANAD</div>
                  <div className="text-neutral-50 text-xs md:text-base">MUNNAR</div>
                  <div className="text-neutral-50 text-xs md:text-base">KOTTAGIRI</div>
                  <div className="text-neutral-50 text-xs md:text-base">COORG</div>
                  <div className="text-neutral-50 text-xs md:text-base">CHIKMAGALUR</div>
                </div>
              </div>
            </div>
            <div className="w-full h-px bg-neutral-50" />
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-col md:flex-row gap-5">
                <div className="text-neutral-50 text-xs md:text-base">Privacy Policy</div>
                <div className="text-neutral-50 text-xs md:text-base">Cancellation & Refund Policy</div>
              </div>
              <div className="text-neutral-50 text-xs md:text-base">Copy Rights @ HiStay 2024</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
