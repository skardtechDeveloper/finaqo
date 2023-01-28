import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const businessLoan = () => {
  return (
    <>
      <Head>
        <title>Business  Loan - Finaqo</title>
        <meta name="description" content="ssss" />
      </Head>
      <main className="main">
        <div className="container">
          <div className="main-top">
            <h1 className="headline">Business  Loan</h1>
            <p className="beforeLeadFormStrip">Business loan is a credit facility offered by Banks/NBFCs and various other financial institutions to meet the funding requirements of individuals, self-employed customers, business owners, MSMEs, and other business entities. Business Loan can be availed by startups, entrepreneurs, retailers, traders, manufacturers, self-employed professionals (CAs/Doctors), existing businesses, and several other business entities.</p>
            <p className="beforeLeadFormStrip">Business loan is majorly classified into two types, such as Secured loan and Unsecured loan. Secured loans are types of loans that require collateral/security, that borrowers need to deposit with the lender to avail funds. However, in the case of unsecured loans, there is no need to submit any type of collateral/security with the Bank/NBFC, or any other financial institution.</p>
            <p className="beforeLeadFormStrip">Banks/NBFCs offer a range of both Secured and Unsecured Business Loans that include Term Loans (Short-term/Intermediate-term/Long-term), Working Capital Loans, Cash Credit, Overdraft, Letter of Credit, Bill/Invoice Discounting, Equipment Finance, Machinery Loans, Point-of-Sale (POS) Loans/Merchant Cash Advance, Fleet Finance, Loans under Bank Guarantee (BG), and Loans under Govt. schemes, such as Mudra Loans (PMMY), SIDBI, PMEGP, CGTMSE, Stand Up India, PSB Loans in 59 minutes, PMRY, etc. Financial institutions also offer Startup Loans, Small Business Loans, and Micro Loans of loan amount up to Rs. 10 lakh or more depending upon business requirements.</p>
          </div>
          <div id="leadFormStarts">
            <div id="personalLoanV2" className="pl-short-lead-form">
              <Image width={143} height={119} loading="lazy" src="/img/pl-illustration.webp" alt="illustration" />
              <div>
                <span className="heading-text">Apply for <span> Business Loan</span></span>
                <form className="material-form" >
                  <div className="form-fields">
                    <div>
                      {/* <div className="row">
                        <div className="form-group col-sm-4">
                          <label>Your desired loan amount </label>
                          <div className="input-group">
                            <span className="input-group-addon">Rs</span>
                            <input
                              type="tel"
                              placeholder="XXXXXXXXX"
                              className="form-control amount required"
                              name="loan_amount"
                              data-validation="number"
                              data-validation-error-msg="Please enter the loan amount"
                              id="loan_amount"
                              maxLength={9}
                              tabIndex={1}
                              defaultValue=""
                              autoComplete="Off"
                            />
                          </div>
                          <span id="loan_amount_word" className="inputbox inwordContainer float_left m40l w195"></span>
                          <span className="loan_amount_indicator help-block"></span>
                        </div>

                        <div className="form-group col-sm-4">
                          <label>How are you currently employed ?</label>
                          <select
                            title="Select your employment"
                            className="form-control wsselectpicker required employment select2-hidden-accessible"
                            id="employment_type_id"
                            name="employment_type_id"
                            data-validation="required"
                            data-validation-error-msg="Please select current employment type"
                            tabIndex={-1}
                            autoComplete="Off"
                            aria-hidden="true"
                          >
                            <option></option>
                            <option defaultValue="3">Self Employed Business</option>
                            <option defaultValue="2">Self Employed Professional</option>
                          </select>
                          <span className="select2 select2-container select2-container--default select2-container--below" dir="ltr">
                            <span className="selection">
                              <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" title="Select your employment" tabIndex={2} aria-labelledby="select2-employment_type_id-container">
                                <span className="select2-selection__rendered" id="select2-employment_type_id-container"><span className="select2-selection__placeholder">Select your employment</span></span>
                                <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
                              </span>
                            </span>
                            <span className="dropdown-wrapper" aria-hidden="true"></span>
                          </span>
                          <span className="employment_error_indicator help-block"></span>
                        </div>

                        <div className="form-group col-sm-4" id="annual-turnover">
                          <label>
                            <span className="turnover_title">Your gross annual sales / turnover? </span>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Your last financial year turnover, as filed with ITR">
                              <span className="badge badge-warning">?</span>
                            </a>
                          </label>
                          <div className="input-group">
                            <span className="input-group-addon">Rs</span>
                            <select
                              title="Select Turnover"
                              className="form-control wsselectpicker required select2-hidden-accessible"
                              name="annual_turnover"
                              id="annual_turnover"
                              data-validation="required"
                              data-validation-error-msg="Please enter the annual turnover"
                              tabIndex={-1}
                              autoComplete="Off"
                              aria-hidden="true"
                            >
                              <option defaultValue="">Please Select Turnover</option>
                              <option defaultValue="500000">Upto 5 Lacs</option>
                              <option defaultValue="1000000">5 Lacs - 10 Lacs</option>
                              <option defaultValue="2500000">10 Lacs - 25 Lacs</option>
                              <option defaultValue="5000000">25 Lacs - 50 Lacs</option>
                              <option defaultValue="7500000">50 Lacs - 75 Lacs</option>
                              <option defaultValue="10000000">75 Lacs - 1 Cr</option>
                              <option defaultValue="30000000">1 Cr - 3 Cr</option>
                              <option defaultValue="50000000">3 Cr - 5 Cr</option>
                              <option defaultValue="100000000">5 Cr+</option>
                            </select>
                            <span className="select2 select2-container select2-container--default select2-container--below" dir="ltr">
                              <span className="selection">
                                <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" title="Select Turnover" tabIndex={7} aria-labelledby="select2-annual_turnover-container">
                                  <span className="select2-selection__rendered" id="select2-annual_turnover-container"><span className="select2-selection__placeholder">Select Turnover</span></span>
                                  <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
                                </span>
                              </span>
                              <span className="dropdown-wrapper" aria-hidden="true"></span>
                            </span>
                          </div>

                          <span className="annual_turnover_error_indicator help-block"></span>
                        </div>

                        <div className="form-group col-sm-4">
                          <label>Where do you currently reside ?</label>
                          <select
                            className="form-control cselectpicker required select2-hidden-accessible"
                            data-live-search="true"
                            title="Select your city"
                            name="city_name"
                            data-validation="required"
                            data-validation-error-msg="Please select current city"
                            id="city"
                            tabIndex={-1}
                            autoComplete="Off"
                            aria-hidden="true"
                          >
                            <option defaultValue=""></option>
                            <optgroup>
                              <option defaultValue="551">Delhi</option><option defaultValue="302">Mumbai</option><option defaultValue="207">Bangalore</option><option defaultValue="309">Pune</option><option defaultValue="420">Chennai</option><option defaultValue="6">Hyderabad</option>
                              <option defaultValue="555">Gurgaon</option>
                            </optgroup>
                            <option defaultValue="674">Abdasa</option>
                            <option defaultValue="576">Abohar</option>
                            <option defaultValue="1">Adilabad</option>
                            <option defaultValue="693">Adipur</option>
                            <option defaultValue="450">Agartala</option>
                            <option defaultValue="694">Ahmedb</option>
                            <option defaultValue="285">Ahmednagar</option>
                            <option defaultValue="337">Aizawl</option>
                            <option defaultValue="408">Ajmer</option>
                            <option defaultValue="286">Akola</option>
                            <option defaultValue="662">Alappuzha</option>
                            <option defaultValue="456">Aligarh</option>
                            <option defaultValue="1099">Alipurdr</option>
                            <option defaultValue="663">Alleppey</option>
                            <option defaultValue="828">Almora</option>
                            <option defaultValue="747">Along</option>
                            <option defaultValue="580">Aluva</option>
                            <option defaultValue="552">Alwar</option>
                            <option defaultValue="683">Amalsad</option>
                            <option defaultValue="104">Amareli</option>
                            <option defaultValue="684">Ambaji</option>
                            <option defaultValue="128">Ambala</option>
                            <option defaultValue="451">Ambassa</option>
                            <option defaultValue="458">Ambedkar Nagar</option>
                            <option defaultValue="786">Ambikapur</option>
                            <option defaultValue="646">Ambur</option>
                            <option defaultValue="287">Amravati</option>
                            <option defaultValue="799">Amreli</option>
                            <option defaultValue="388">Amritsar</option>
                            <option defaultValue="105">Anand</option>
                            <option defaultValue="2">Anantapur</option>
                            <option defaultValue="160">Anantnag</option>
                            <option defaultValue="24">Andman &amp; Nicobar</option>
                            <option defaultValue="1130">Angamalli</option>
                            <option defaultValue="356">Angul</option>
                            <option defaultValue="685">Anjar</option>
                            <option defaultValue="25">Anjaw</option>
                            <option defaultValue="609">Ankleshwar</option>
                            <option defaultValue="237">Anuppur</option>
                            <option defaultValue="1129">Arambagh</option>
                            <option defaultValue="1146">Arani</option>
                            <option defaultValue="773">Araria</option>
                            <option defaultValue="419">Ariyalur</option>
                            <option defaultValue="1116">Arrah</option>
                            <option defaultValue="563">Asansol</option>
                            <option defaultValue="238">Ashoknagar</option>
                            <option defaultValue="459">Auraiya</option>
                            <option defaultValue="288">Aurangabad</option>
                            <option defaultValue="764">Aurangabad (bihar)</option>
                            <option defaultValue="460">Azamgarh</option>
                            <option defaultValue="461">Badaun</option>
                            <option defaultValue="621">Baddi</option>
                            <option defaultValue="872">Badlapur</option>
                            <option defaultValue="206">Bagalkote</option>
                            <option defaultValue="829">Bageshwar</option>
                            <option defaultValue="462">Bagpat</option>
                            <option defaultValue="617">Bahadurgarh</option>
                            <option defaultValue="463">Bahraich</option>
                            <option defaultValue="787">Baikunthpur</option>
                            <option defaultValue="686">Bajwa</option>
                            <option defaultValue="42">Baksa</option>
                            <option defaultValue="239">Balaghat</option>
                            <option defaultValue="667">Balasore</option>
                            <option defaultValue="357">Baleswar</option>
                            <option defaultValue="464">Ballia</option>
                            <option defaultValue="465">Balrampur</option>
                            <option defaultValue="1101">Balurghat</option>
                            <option defaultValue="796">Banaskantha</option>
                            <option defaultValue="106">Banaskhantha</option>
                            <option defaultValue="466">Banda</option>
                            <option defaultValue="161">Bandipore</option>
                            <option defaultValue="780">Banka</option>
                            <option defaultValue="532">Bankura</option>
                            <option defaultValue="809">Banswara</option>
                            <option defaultValue="467">Barabanki</option>
                            <option defaultValue="664">Baramati</option>
                            <option defaultValue="162">Baramulla</option>
                            <option defaultValue="824">Baran</option>
                            <option defaultValue="533">Bardhaman</option>
                            <option defaultValue="687">Bardoli</option>
                            <option defaultValue="468">Bareilly</option>
                            <option defaultValue="358">Bargarh</option>
                            <option defaultValue="1119">Baripada</option>
                            <option defaultValue="810">Barmer</option>
                            <option defaultValue="389">Barnala</option>
                            <option defaultValue="43">Barpeta</option>
                            <option defaultValue="240">Barwani</option>
                            <option defaultValue="81">Bastar</option>
                            <option defaultValue="469">Basti</option>
                            <option defaultValue="390">Bathinda</option>
                            <option defaultValue="675">Bavala</option>
                            <option defaultValue="640">Beawar</option>
                            <option defaultValue="290">Beed</option>
                            <option defaultValue="586">Begusarai</option>
                            <option defaultValue="631">Behrampur</option>
                            <option defaultValue="208">Belgaum</option>
                            <option defaultValue="209">Bellary</option>
                            <option defaultValue="695">Betroj</option>
                            <option defaultValue="761">Bettiah</option>
                            <option defaultValue="241">Betul</option>
                            <option defaultValue="777">Bhabua</option>
                            <option defaultValue="688">Bhachau</option>
                            <option defaultValue="359">Bhadrak</option>
                            <option defaultValue="71">Bhagalpur</option>
                            <option defaultValue="291">Bhandara</option>
                            <option defaultValue="409">Bharatpur</option>
                            <option defaultValue="107">Bharuch</option>
                            <option defaultValue="108">Bhavnagar</option>
                            <option defaultValue="696">Bhilad</option>
                            <option defaultValue="574">Bhilai</option>
                            <option defaultValue="641">Bhilwara</option>
                            <option defaultValue="242">Bhind</option>
                            <option defaultValue="642">Bhiwadi</option>
                            <option defaultValue="129">Bhiwani</option>
                            <option defaultValue="756">Bhojpur</option>
                            <option defaultValue="360">Bhubaneswar</option>
                            <option defaultValue="610">Bhuj</option>
                            <option defaultValue="1132">Bhupalpally</option>
                            <option defaultValue="210">Bidar</option>
                            <option defaultValue="1141">Bihar Sharif</option>
                            <option defaultValue="82">Bijapur</option>
                            <option defaultValue="211">Bijapur</option>
                            <option defaultValue="470">Bijnor</option>
                            <option defaultValue="410">Bikaner</option>
                            <option defaultValue="83">Bilaspur</option>
                            <option defaultValue="148">Bilaspur</option>
                            <option defaultValue="676">Bilimora</option>
                            <option defaultValue="534">Birbhum</option>
                            <option defaultValue="320">Bishnupur</option>
                            <option defaultValue="182">Bokaro</option>
                            <option defaultValue="361">Bolangir</option>
                            <option defaultValue="743">Bomdila</option>
                            <option defaultValue="44">Bongaigaon</option>
                            <option defaultValue="362">Boudh</option>
                            <option defaultValue="163">Budgam</option>
                            <option defaultValue="471">Bulandshahr</option>
                            <option defaultValue="292">Buldhana</option>
                            <option defaultValue="811">Bundi</option>
                            <option defaultValue="672">Burdwan</option>
                            <option defaultValue="244">Burhanpur</option>
                            <option defaultValue="776">Buxar</option>
                            <option defaultValue="45">Cachar</option>
                            <option defaultValue="1137">Chaibasa</option>
                            <option defaultValue="1126">Chakradharpur</option>
                            <option defaultValue="212">Chamarajanagar</option>
                            <option defaultValue="149">Chamba</option>
                            <option defaultValue="526">Chamoli</option>
                            <option defaultValue="1106">Champa</option>
                            <option defaultValue="830">Champawat</option>
                            <option defaultValue="338">Champhai</option>
                            <option defaultValue="697">Chand Kheda</option>
                            <option defaultValue="472">Chandauli</option>
                            <option defaultValue="321">Chandel</option>
                            <option defaultValue="293">Chandrapur</option>
                            <option defaultValue="26">Changlang</option>
                            <option defaultValue="587">Chapra</option>
                            <option defaultValue="183">Chatra</option>
                            <option defaultValue="1136">Cherpulassery</option>
                            <option defaultValue="245">Chhatarpur</option>
                            <option defaultValue="246">Chhindwara</option>
                            <option defaultValue="647">Chidambaram</option>
                            <option defaultValue="691">Chikhli (guj.)</option>
                            <option defaultValue="213">Chikkaballapur</option>
                            <option defaultValue="214">Chikkamagaluru</option>
                            <option defaultValue="1118">Chilakaluripet</option>
                            <option defaultValue="589">Chinnamiram</option>
                            <option defaultValue="1111">Chirala</option>
                            <option defaultValue="46">Chirang</option>
                            <option defaultValue="215">Chitradurga</option>
                            <option defaultValue="473">Chitrakoot</option>
                            <option defaultValue="1117">Chittaranjan</option>
                            <option defaultValue="3">Chittoor</option>
                            <option defaultValue="643">Chittorgarh</option>
                            <option defaultValue="698">Chotila</option>
                            <option defaultValue="322">Churachandpur</option>
                            <option defaultValue="812">Churu</option>
                            <option defaultValue="535">Cooch Behar</option>
                            <option defaultValue="422">Cuddalore</option>
                            <option defaultValue="363">Cuttack</option>
                            <option defaultValue="109">Daang</option>
                            <option defaultValue="99">Dadra &amp; Nagar Haveli</option>
                            <option defaultValue="1135">Dahej</option>
                            <option defaultValue="110">Dahod</option>
                            <option defaultValue="536">Dakshin Dinajpur</option>
                            <option defaultValue="216">Dakshina Kannada</option>
                            <option defaultValue="789">Daman</option>
                            <option defaultValue="100">Daman &amp; Diu</option>
                            <option defaultValue="632">Damanjodi</option>
                            <option defaultValue="247">Damoh</option>
                            <option defaultValue="84">Dantewada</option>
                            <option defaultValue="746">Daporijo</option>
                            <option defaultValue="72">Darbhanga</option>
                            <option defaultValue="537">Darjeeling</option>
                            <option defaultValue="47">Darrang</option>
                            <option defaultValue="248">Datia</option>
                            <option defaultValue="825">Dausa</option>
                            <option defaultValue="217">Davanagere</option>
                            <option defaultValue="689">Deesa</option>
                            <option defaultValue="364">Deogarh</option>
                            <option defaultValue="184">Deoghar</option>
                            <option defaultValue="474">Deoria</option>
                            <option defaultValue="249">Dewas</option>
                            <option defaultValue="452">Dhalai</option>
                            <option defaultValue="85">Dhamtari</option>
                            <option defaultValue="185">Dhanbad</option>
                            <option defaultValue="690">Dhandhuka</option>
                            <option defaultValue="678">Dhangardha</option>
                            <option defaultValue="250">Dhar</option>
                            <option defaultValue="1143">Dharapuram</option>
                            <option defaultValue="423">Dharmapuri</option>
                            <option defaultValue="218">Dharwad</option>
                            <option defaultValue="48">Dhemaji</option>
                            <option defaultValue="365">Dhenkanal</option>
                            <option defaultValue="644">Dholpur</option>
                            <option defaultValue="677">Dhoraji</option>
                            <option defaultValue="49">Dhubri</option>
                            <option defaultValue="294">Dhule</option>
                            <option defaultValue="749">Dibang Valley</option>
                            <option defaultValue="50">Dibrugarh</option>
                            <option defaultValue="345">Dimapur</option>
                            <option defaultValue="424">Dindigul</option>
                            <option defaultValue="251">Dindori</option>
                            <option defaultValue="1112">Dinhata</option>
                            <option defaultValue="51">Dispur</option>
                            <option defaultValue="788">Diu</option>
                            <option defaultValue="164">Doda</option>
                            <option defaultValue="186">Dumka</option>
                            <option defaultValue="813">Dungarpur</option>
                            <option defaultValue="86">Durg</option>
                            <option defaultValue="658">Durgapur</option>
                            <option defaultValue="692">Dwarka</option>
                            <option defaultValue="329">East Garo Hills</option>
                            <option defaultValue="4">East Godavari</option>
                            <option defaultValue="27">East Kameng</option>
                            <option defaultValue="330">East Khasi Hills</option>
                            <option defaultValue="28">East Siang</option>
                            <option defaultValue="187">East Singhbhum</option>
                            <option defaultValue="564">Ernakulam</option>
                            <option defaultValue="425">Erode</option>
                            <option defaultValue="475">Etah</option>
                            <option defaultValue="476">Etawah</option>
                            <option defaultValue="477">Faizabad</option>
                            <option defaultValue="1113">Falakata</option>
                            <option defaultValue="391">Faridkot</option>
                            <option defaultValue="478">Farrukhabad</option>
                            <option defaultValue="131">Fatehabad</option>
                            <option defaultValue="392">Fatehgarh Sahib</option>
                            <option defaultValue="479">Fatehpur</option>
                            <option defaultValue="634">Fazilka</option>
                            <option defaultValue="480">Firozabad</option>
                            <option defaultValue="393">Firozpur</option>
                            <option defaultValue="219">Gadag</option>
                            <option defaultValue="295">Gadchiroli</option>
                            <option defaultValue="740">Gadwal</option>
                            <option defaultValue="366">Gajapati</option>
                            <option defaultValue="165">Ganderbal</option>
                            <option defaultValue="679">Gandevi</option>
                            <option defaultValue="801">Gandhi Nagar</option>
                            <option defaultValue="659">Gandhidham</option>
                            <option defaultValue="585">Ganganagar</option>
                            <option defaultValue="415">Gangtok</option>
                            <option defaultValue="367">Ganjam</option>
                            <option defaultValue="188">Garhwa</option>
                            <option defaultValue="481">Gautam Buddha Nagar</option>
                            <option defaultValue="604">Gaya</option>
                            <option defaultValue="416">Geyzing</option>
                            <option defaultValue="483">Ghazipur</option>
                            <option defaultValue="189">Giridih</option>
                            <option defaultValue="673">Goa</option>
                            <option defaultValue="52">Goalpara</option>
                            <option defaultValue="190">Godda</option>
                            <option defaultValue="680">Godhra</option>
                            <option defaultValue="873">Gohana</option>
                            <option defaultValue="53">Golaghat</option>
                            <option defaultValue="484">Gonda</option>
                            <option defaultValue="296">Gondia</option>
                            <option defaultValue="766">Gopal Ganj</option>
                            <option defaultValue="654">Gorakhpur</option>
                            <option defaultValue="485">Gorkakhpur</option>
                            <option defaultValue="1127">Gudivada</option>
                            <option defaultValue="220">Gulbarga</option>
                            <option defaultValue="191">Gumla</option>
                            <option defaultValue="252">Guna</option>
                            <option defaultValue="5">Guntur</option>
                            <option defaultValue="394">Gurdaspur</option>
                            <option defaultValue="54">Guwahati</option>
                            <option defaultValue="253">Gwalior</option>
                            <option defaultValue="55">Hailakandi</option>
                            <option defaultValue="605">Hajipur</option>
                            <option defaultValue="606">Haldia (bihar)</option>
                            <option defaultValue="655">Haldwani</option>
                            <option defaultValue="611">Halol</option>
                            <option defaultValue="150">Hamirpur</option>
                            <option defaultValue="486">Hamirpur</option>
                            <option defaultValue="669">Hanumangarh</option>
                            <option defaultValue="835">Hapur</option>
                            <option defaultValue="254">Harda</option>
                            <option defaultValue="487">Hardoi</option>
                            <option defaultValue="528">Haridwar</option>
                            <option defaultValue="221">Hassan</option>
                            <option defaultValue="222">Haveri</option>
                            <option defaultValue="192">Hazaribagh</option>
                            <option defaultValue="797">Himat Nagar</option>
                            <option defaultValue="612">Himatnagar</option>
                            <option defaultValue="1139">Hindupur</option>
                            <option defaultValue="297">Hingoli</option>
                            <option defaultValue="133">Hisar</option>
                            <option defaultValue="538">Hooghly</option>
                            <option defaultValue="255">Hoshangabad</option>
                            <option defaultValue="395">Hoshiarpur</option>
                            <option defaultValue="661">Hospet</option>
                            <option defaultValue="648">Hosur</option>
                            <option defaultValue="539">Howrah</option>
                            <option defaultValue="573">Hubli</option>
                            <option defaultValue="628">Ichalkaranji</option>
                            <option defaultValue="681">Idar</option>
                            <option defaultValue="804">Idukki</option>
                            <option defaultValue="323">Imphal East</option>
                            <option defaultValue="324">Imphal West</option>
                            <option defaultValue="1138">Iritty</option>
                            <option defaultValue="29">Itanagar</option>
                            <option defaultValue="257">Jabalpur</option>
                            <option defaultValue="808">Jagadalpur</option>
                            <option defaultValue="868">Jagadhri</option>
                            <option defaultValue="368">Jagatsinghpur</option>
                            <option defaultValue="588">Jagdalpur</option>
                            <option defaultValue="763">Jahanabad</option>
                            <option defaultValue="331">Jaintia Hills</option>
                            <option defaultValue="814">Jaisalmer</option>
                            <option defaultValue="369">Jajapur</option>
                            <option defaultValue="396">Jalandhar</option>
                            <option defaultValue="488">Jalaun</option>
                            <option defaultValue="1098">Jaleswar</option>
                            <option defaultValue="298">Jalgaon</option>
                            <option defaultValue="299">Jalna</option>
                            <option defaultValue="815">Jalore</option>
                            <option defaultValue="540">Jalpaiguri</option>
                            <option defaultValue="682">Jamkandorana</option>
                            <option defaultValue="166">Jammu</option>
                            <option defaultValue="112">Jamnagar</option>
                            <option defaultValue="567">Jamshedpur</option>
                            <option defaultValue="193">Jamtara</option>
                            <option defaultValue="778">Jamui</option>
                            <option defaultValue="88">Janigir - Champa</option>
                            <option defaultValue="785">Janjgir-champa</option>
                            <option defaultValue="87">Jashpur</option>
                            <option defaultValue="489">Jaunpur</option>
                            <option defaultValue="699">Jetpur</option>
                            <option defaultValue="258">Jhabua</option>
                            <option defaultValue="134">Jhajjar</option>
                            <option defaultValue="816">Jhalawar</option>
                            <option defaultValue="490">Jhansi</option>
                            <option defaultValue="370">Jharsuguda</option>
                            <option defaultValue="817">Jhunjhunu</option>
                            <option defaultValue="135">Jind</option>
                            <option defaultValue="412">Jodhpur</option>
                            <option defaultValue="56">Jorhat</option>
                            <option defaultValue="113">Junagadh</option>
                            <option defaultValue="491">Jyotiba Phule Nagar</option>
                            <option defaultValue="57">Kabri Anglong</option>
                            <option defaultValue="7">Kadapa</option>
                            <option defaultValue="613">Kadi</option>
                            <option defaultValue="453">Kailashahar</option>
                            <option defaultValue="136">Kaithal</option>
                            <option defaultValue="590">Kakinada</option>
                            <option defaultValue="371">Kalahandi</option>
                            <option defaultValue="618">Kalka</option>
                            <option defaultValue="700">Kalol</option>
                            <option defaultValue="1140">Kalyani</option>
                            <option defaultValue="701">Kamrej</option>
                            <option defaultValue="58">Kamrup Metropolitian</option>
                            <option defaultValue="59">Kamrup Rural</option>
                            <option defaultValue="426">Kanchipuram</option>
                            <option defaultValue="372">Kandhamal</option>
                            <option defaultValue="702">Kandla</option>
                            <option defaultValue="151">Kangra</option>
                            <option defaultValue="91">Kanker</option>
                            <option defaultValue="703">Kankrej</option>
                            <option defaultValue="492">Kannauj</option>
                            <option defaultValue="624">Kannur</option>
                            <option defaultValue="493">Kanpur Dehat</option>
                            <option defaultValue="494">Kanpur Nagar</option>
                            <option defaultValue="427">Kanyakumari</option>
                            <option defaultValue="704">Kapadwanj</option>
                            <option defaultValue="397">Kapurthala</option>
                            <option defaultValue="629">Karad</option>
                            <option defaultValue="827">Karauli</option>
                            <option defaultValue="754">Karbi Anglong</option>
                            <option defaultValue="167">Kargil</option>
                            <option defaultValue="755">Karim Ganj</option>
                            <option defaultValue="60">Karimganj</option>
                            <option defaultValue="8">Karimnagar</option>
                            <option defaultValue="1108">Karkala</option>
                            <option defaultValue="137">Karnal</option>
                            <option defaultValue="866">Kartarpur</option>
                            <option defaultValue="428">Karur</option>
                            <option defaultValue="806">Kasaragod</option>
                            <option defaultValue="671">Kashipur</option>
                            <option defaultValue="168">Kathua</option>
                            <option defaultValue="774">Katihar</option>
                            <option defaultValue="259">Katni</option>
                            <option defaultValue="1107">Katwa</option>
                            <option defaultValue="495">Kaushambi</option>
                            <option defaultValue="92">Kawardha</option>
                            <option defaultValue="373">Kendrapara</option>
                            <option defaultValue="374">Kendujhar</option>
                            <option defaultValue="633">Keonjhar</option>
                            <option defaultValue="705">Keshod</option>
                            <option defaultValue="771">Khagaria</option>
                            <option defaultValue="706">Khambhat</option>
                            <option defaultValue="9">Khammam</option>
                            <option defaultValue="260">Khandwa</option>
                            <option defaultValue="635">Khanna</option>
                            <option defaultValue="707">Khanpur</option>
                            <option defaultValue="584">Kharagpur</option>
                            <option defaultValue="875">Kharar</option>
                            <option defaultValue="261">Khargone</option>
                            <option defaultValue="114">Kheda</option>
                            <option defaultValue="751">Khonsa</option>
                            <option defaultValue="194">Khunti</option>
                            <option defaultValue="375">Khurdha</option>
                            <option defaultValue="152">Kinnaur</option>
                            <option defaultValue="346">Kiphire</option>
                            <option defaultValue="772">Kishanganj</option>
                            <option defaultValue="169">Kishtwar</option>
                            <option defaultValue="591">Kodad</option>
                            <option defaultValue="223">Kodagu</option>
                            <option defaultValue="195">Koderma</option>
                            <option defaultValue="347">Kohima</option>
                            <option defaultValue="61">Kokrajhar</option>
                            <option defaultValue="224">Kolar</option>
                            <option defaultValue="339">Kolasib</option>
                            <option defaultValue="300">Kolhapur</option>
                            <option defaultValue="575">Kollam</option>
                            <option defaultValue="225">Koppal</option>
                            <option defaultValue="376">Koraput</option>
                            <option defaultValue="89">Korba</option>
                            <option defaultValue="90">Koriya</option>
                            <option defaultValue="73">Kosi</option>
                            <option defaultValue="413">Kota</option>
                            <option defaultValue="1097">Kothagudem</option>
                            <option defaultValue="1145">Kottakkal</option>
                            <option defaultValue="1124">Kottarakara</option>
                            <option defaultValue="560">Kottayam</option>
                            <option defaultValue="569">Kozhikode</option>
                            <option defaultValue="10">Krishna</option>
                            <option defaultValue="429">Krishnagiri</option>
                            <option defaultValue="170">Kulgam</option>
                            <option defaultValue="153">Kullu</option>
                            <option defaultValue="649">Kumbakonam</option>
                            <option defaultValue="874">Kundli</option>
                            <option defaultValue="171">Kupwara</option>
                            <option defaultValue="11">Kurnool</option>
                            <option defaultValue="138">Kurukshetra</option>
                            <option defaultValue="30">Kurung Kumey</option>
                            <option defaultValue="496">Kushinagar</option>
                            <option defaultValue="115">Kutch</option>
                            <option defaultValue="154">Lahul And Spiti</option>
                            <option defaultValue="62">Lakhimpur</option>
                            <option defaultValue="497">Lakhimpur Kheri</option>
                            <option defaultValue="783">Lakhisarai</option>
                            <option defaultValue="236">Lakshadweep</option>
                            <option defaultValue="498">Lalitpur</option>
                            <option defaultValue="196">Latehar</option>
                            <option defaultValue="301">Latur</option>
                            <option defaultValue="340">Lawngtlai</option>
                            <option defaultValue="172">Leh</option>
                            <option defaultValue="197">Lohardaga</option>
                            <option defaultValue="31">Lohit</option>
                            <option defaultValue="348">Longleng</option>
                            <option defaultValue="32">Lower Dibang Valley</option>
                            <option defaultValue="33">Lower Subansiri</option>
                            <option defaultValue="398">Ludhiana</option>
                            <option defaultValue="708">Lunawada</option>
                            <option defaultValue="341">Lunglei</option>
                            <option defaultValue="1128">Machilipatnam</option>
                            <option defaultValue="1109">Madanapalle</option>
                            <option defaultValue="775">Madhepura</option>
                            <option defaultValue="769">Madhubani</option>
                            <option defaultValue="74">Magadh</option>
                            <option defaultValue="741">Mahabub Nagar</option>
                            <option defaultValue="500">Mahamaya Nagar</option>
                            <option defaultValue="501">Maharajganj</option>
                            <option defaultValue="93">Mahasamund</option>
                            <option defaultValue="12">Mahbubnagar</option>
                            <option defaultValue="139">Mahendragarh</option>
                            <option defaultValue="502">Mahoba</option>
                            <option defaultValue="709">Mahuva</option>
                            <option defaultValue="503">Mainpuri</option>
                            <option defaultValue="233">Malabar</option>
                            <option defaultValue="660">Malappuram</option>
                            <option defaultValue="1142">Malbazar</option>
                            <option defaultValue="542">Malda</option>
                            <option defaultValue="665">Malegaon</option>
                            <option defaultValue="1121">Malerkotla</option>
                            <option defaultValue="377">Malkangiri</option>
                            <option defaultValue="668">Malout</option>
                            <option defaultValue="342">Mamit</option>
                            <option defaultValue="592">Mancherial</option>
                            <option defaultValue="155">Mandi</option>
                            <option defaultValue="1134">Mandideep</option>
                            <option defaultValue="262">Mandla</option>
                            <option defaultValue="263">Mandsaur</option>
                            <option defaultValue="710">Mandvi</option>
                            <option defaultValue="226">Mandya</option>
                            <option defaultValue="623">Mangalore</option>
                            <option defaultValue="417">Mangan</option>
                            <option defaultValue="399">Mansa</option>
                            <option defaultValue="790">Margao</option>
                            <option defaultValue="102">Margoa</option>
                            <option defaultValue="63">Marigaon</option>
                            <option defaultValue="504">Mathura</option>
                            <option defaultValue="505">Mau</option>
                            <option defaultValue="378">Mayurbhanj</option>
                            <option defaultValue="13">Medak</option>
                            <option defaultValue="116">Mehsana</option>
                            <option defaultValue="140">Mewat</option>
                            <option defaultValue="543">Midnapore East</option>
                            <option defaultValue="544">Midnapore West</option>
                            <option defaultValue="1123">Miryalaguda</option>
                            <option defaultValue="507">Mirzapur</option>
                            <option defaultValue="711">Modasa</option>
                            <option defaultValue="400">Moga</option>
                            <option defaultValue="401">Mohali</option>
                            <option defaultValue="349">Mokokchung</option>
                            <option defaultValue="350">Mon</option>
                            <option defaultValue="758">Monghyr</option>
                            <option defaultValue="508">Moradabad</option>
                            <option defaultValue="264">Morena</option>
                            <option defaultValue="614">Morvi</option>
                            <option defaultValue="757">Motihari</option>
                            <option defaultValue="402">Muktsar</option>
                            <option defaultValue="615">Mundra</option>
                            <option defaultValue="75">Munger</option>
                            <option defaultValue="545">Murshidabad</option>
                            <option defaultValue="509">Muzaffarnagar</option>
                            <option defaultValue="582">Muzaffarpur</option>
                            <option defaultValue="227">Mysore</option>
                            <option defaultValue="379">Nabarangpur</option>
                            <option defaultValue="636">Nabha</option>
                            <option defaultValue="546">Nadia</option>
                            <option defaultValue="577">Nadiad</option>
                            <option defaultValue="64">Nagaon</option>
                            <option defaultValue="431">Nagapattinam</option>
                            <option defaultValue="818">Nagaur</option>
                            <option defaultValue="650">Nagercoil</option>
                            <option defaultValue="739">Nainital</option>
                            <option defaultValue="712">Nakhtrana</option>
                            <option defaultValue="867">Nakodar</option>
                            <option defaultValue="760">Nalanda</option>
                            <option defaultValue="65">Nalbari</option>
                            <option defaultValue="14">Nalgonda</option>
                            <option defaultValue="713">Naliya</option>
                            <option defaultValue="432">Namakkal</option>
                            <option defaultValue="418">Namchi</option>
                            <option defaultValue="714">Nanapondha</option>
                            <option defaultValue="304">Nanded</option>
                            <option defaultValue="305">Nandurbar</option>
                            <option defaultValue="715">Naranpar</option>
                            <option defaultValue="94">Narayanpur</option>
                            <option defaultValue="117">Narmada</option>
                            <option defaultValue="1104">Narnaul</option>
                            <option defaultValue="716">Naroda</option>
                            <option defaultValue="265">Narsinghpur</option>
                            <option defaultValue="306">Nashik</option>
                            <option defaultValue="666">Navi Mumbai</option>
                            <option defaultValue="118">Navsari</option>
                            <option defaultValue="765">Nawadah</option>
                            <option defaultValue="403">Nawanshahr</option>
                            <option defaultValue="380">Nayagarh</option>
                            <option defaultValue="266">Neemuch</option>
                            <option defaultValue="15">Nellore</option>
                            <option defaultValue="433">Nilgiris</option>
                            <option defaultValue="16">Nizamabad</option>
                            <option defaultValue="547">North 24 Parganas</option>
                            <option defaultValue="66">North Cachar Hills</option>
                            <option defaultValue="381">Nuapada</option>
                            <option defaultValue="593">Ongole</option>
                            <option defaultValue="307">Osmanabad</option>
                            <option defaultValue="870">Padra</option>
                            <option defaultValue="198">Pakur</option>
                            <option defaultValue="625">Palakkad</option>
                            <option defaultValue="199">Palamu</option>
                            <option defaultValue="717">Palanpur</option>
                            <option defaultValue="819">Pali</option>
                            <option defaultValue="619">Palwal</option>
                            <option defaultValue="101">Panaji</option>
                            <option defaultValue="800">Panch Mahals</option>
                            <option defaultValue="141">Panchkula</option>
                            <option defaultValue="119">Panchmahal</option>
                            <option defaultValue="142">Panipat</option>
                            <option defaultValue="267">Panna</option>
                            <option defaultValue="34">Papum Pare</option>
                            <option defaultValue="308">Parbhani</option>
                            <option defaultValue="748">Pasighat</option>
                            <option defaultValue="120">Patan</option>
                            <option defaultValue="626">Pathanamthitta</option>
                            <option defaultValue="637">Pathankot</option>
                            <option defaultValue="404">Patiala</option>
                            <option defaultValue="529">Pauri Garhwal</option>
                            <option defaultValue="718">Pavijetpur</option>
                            <option defaultValue="620">Peowa</option>
                            <option defaultValue="434">Perambalur</option>
                            <option defaultValue="351">Peren</option>
                            <option defaultValue="583">Phagwara</option>
                            <option defaultValue="352">Phek</option>
                            <option defaultValue="1096">Phusro</option>
                            <option defaultValue="511">Pilibhit</option>
                            <option defaultValue="869">Pinjore</option>
                            <option defaultValue="607">Piparia</option>
                            <option defaultValue="871">Pithampur</option>
                            <option defaultValue="831">Pithoragarh</option>
                            <option defaultValue="651">Pollachi</option>
                            <option defaultValue="792">Ponda</option>
                            <option defaultValue="387">Pondicherry</option>
                            <option defaultValue="622">Pontashaib</option>
                            <option defaultValue="173">Poonch</option>
                            <option defaultValue="121">Porbandar</option>
                            <option defaultValue="17">Prakasam</option>
                            <option defaultValue="512">Pratapgarh</option>
                            <option defaultValue="594">Proddattur</option>
                            <option defaultValue="435">Pudukkottai</option>
                            <option defaultValue="174">Pulwama</option>
                            <option defaultValue="382">Puri</option>
                            <option defaultValue="77">Purnia</option>
                            <option defaultValue="548">Purulia</option>
                            <option defaultValue="719">Radhanpur</option>
                            <option defaultValue="513">Rae Bareli</option>
                            <option defaultValue="1114">Raghunathpur</option>
                            <option defaultValue="228">Raichur</option>
                            <option defaultValue="310">Raigad</option>
                            <option defaultValue="1110">Raiganj</option>
                            <option defaultValue="95">Raigarh</option>
                            <option defaultValue="1131">Rairangpur</option>
                            <option defaultValue="268">Raisen</option>
                            <option defaultValue="570">Rajahmundry</option>
                            <option defaultValue="1103">Rajgangapur</option>
                            <option defaultValue="269">Rajgarh</option>
                            <option defaultValue="122">Rajkot</option>
                            <option defaultValue="96">Rajnandgaon</option>
                            <option defaultValue="175">Rajouri</option>
                            <option defaultValue="720">Rajpipla</option>
                            <option defaultValue="638">Rajpura</option>
                            <option defaultValue="826">Rajsamand</option>
                            <option defaultValue="1144">Ramagundam</option>
                            <option defaultValue="229">Ramanagara</option>
                            <option defaultValue="436">Ramanathapuram</option>
                            <option defaultValue="176">Ramban</option>
                            <option defaultValue="200">Ramgarh</option>
                            <option defaultValue="514">Rampur</option>
                            <option defaultValue="1115">Ranaghat</option>
                            <option defaultValue="721">Ranavav Porbandar</option>
                            <option defaultValue="201">Ranchi</option>
                            <option defaultValue="18">Rangareddy</option>
                            <option defaultValue="1133">Raniganj</option>
                            <option defaultValue="722">Rapar</option>
                            <option defaultValue="270">Ratlam</option>
                            <option defaultValue="311">Ratnagiri</option>
                            <option defaultValue="383">Rayagada</option>
                            <option defaultValue="177">Reasi</option>
                            <option defaultValue="271">Rewa</option>
                            <option defaultValue="143">Rewari</option>
                            <option defaultValue="332">Ri-bhoi</option>
                            <option defaultValue="833">Rishikesh</option>
                            <option defaultValue="144">Rohtak</option>
                            <option defaultValue="762">Rohtas</option>
                            <option defaultValue="753">Roing</option>
                            <option defaultValue="656">Roorkee</option>
                            <option defaultValue="639">Ropar</option>
                            <option defaultValue="561">Rourkela</option>
                            <option defaultValue="530">Rudraprayag</option>
                            <option defaultValue="657">Rudrapur</option>
                            <option defaultValue="405">Rupnagar</option>
                            <option defaultValue="123">Sabarkantha</option>
                            <option defaultValue="272">Sagar</option>
                            <option defaultValue="515">Saharanpur</option>
                            <option defaultValue="759">Saharsa</option>
                            <option defaultValue="202">Sahebganj</option>
                            <option defaultValue="343">Saiha</option>
                            <option defaultValue="437">Salem</option>
                            <option defaultValue="770">Samastipur</option>
                            <option defaultValue="178">Samba</option>
                            <option defaultValue="384">Sambalpur</option>
                            <option defaultValue="723">Sanand</option>
                            <option defaultValue="595">Sanga Reddy</option>
                            <option defaultValue="630">Sangamner</option>
                            <option defaultValue="312">Sangli</option>
                            <option defaultValue="406">Sangrur</option>
                            <option defaultValue="724">Sanjan</option>
                            <option defaultValue="516">Sant Kabir Nagar</option>
                            <option defaultValue="517">Sant Ravidas Nagar</option>
                            <option defaultValue="725">Santrampura</option>
                            <option defaultValue="78">Saran</option>
                            <option defaultValue="1125">Sasaram</option>
                            <option defaultValue="313">Satara</option>
                            <option defaultValue="273">Satna</option>
                            <option defaultValue="822">Sawai Madhopur</option>
                            <option defaultValue="726">Sayan</option>
                            <option defaultValue="571">Secunderabad</option>
                            <option defaultValue="274">Sehore</option>
                            <option defaultValue="325">Senapati</option>
                            <option defaultValue="275">Seoni</option>
                            <option defaultValue="744">Seppa</option>
                            <option defaultValue="203">Seraikela Kharsawan</option>
                            <option defaultValue="344">Serchhip</option>
                            <option defaultValue="276">Shahdol</option>
                            <option defaultValue="518">Shahjahanpur</option>
                            <option defaultValue="645">Shahpura</option>
                            <option defaultValue="277">Shajapur</option>
                            <option defaultValue="781">Sheikhpura</option>
                            <option defaultValue="278">Sheopur</option>
                            <option defaultValue="333">Shilong</option>
                            <option defaultValue="156">Shimla</option>
                            <option defaultValue="230">Shimoga</option>
                            <option defaultValue="279">Shivpuri</option>
                            <option defaultValue="179">Shopian</option>
                            <option defaultValue="519">Shravasti</option>
                            <option defaultValue="67">Sibsagar</option>
                            <option defaultValue="520">Siddharthnagar</option>
                            <option defaultValue="596">Siddipet</option>
                            <option defaultValue="280">Sidhi</option>
                            <option defaultValue="820">Sikar</option>
                            <option defaultValue="603">Silchar</option>
                            <option defaultValue="572">Siliguri</option>
                            <option defaultValue="727">Silvasa</option>
                            <option defaultValue="608">Silvassa</option>
                            <option defaultValue="728">Silvassa</option>
                            <option defaultValue="204">Simdega</option>
                            <option defaultValue="314">Sindhudurg</option>
                            <option defaultValue="157">Sirmaur</option>
                            <option defaultValue="821">Sirohi</option>
                            <option defaultValue="145">Sirsa</option>
                            <option defaultValue="578">Siruguppa</option>
                            <option defaultValue="768">Sitamarhi</option>
                            <option defaultValue="521">Sitapur</option>
                            <option defaultValue="438">Sivagangai</option>
                            <option defaultValue="767">Siwan</option>
                            <option defaultValue="158">Solan</option>
                            <option defaultValue="315">Solapur</option>
                            <option defaultValue="729">Somnath Junagadha</option>
                            <option defaultValue="522">Sonbhadra</option>
                            <option defaultValue="385">Sonepur</option>
                            <option defaultValue="146">Sonipat</option>
                            <option defaultValue="68">Sonitpur</option>
                            <option defaultValue="1100">Soro</option>
                            <option defaultValue="549">South 24 Parganas</option>
                            <option defaultValue="334">South Garo Hills</option>
                            <option defaultValue="791">South Goa</option>
                            <option defaultValue="670">Sri Ganganagar</option>
                            <option defaultValue="19">Srikakulam</option>
                            <option defaultValue="1105">Srikalahasti</option>
                            <option defaultValue="180">Srinagar</option>
                            <option defaultValue="652">Sriperumbudur</option>
                            <option defaultValue="523">Sultanpur</option>
                            <option defaultValue="386">Sundargarh</option>
                            <option defaultValue="779">Supaul</option>
                            <option defaultValue="730">Surendernagar</option>
                            <option defaultValue="798">Surendra Nagar</option>
                            <option defaultValue="125">Surendranagar</option>
                            <option defaultValue="98">Surguja</option>
                            <option defaultValue="597">Suryapet</option>
                            <option defaultValue="598">Tadipatri</option>
                            <option defaultValue="1102">Talcher</option>
                            <option defaultValue="326">Tamenglong</option>
                            <option defaultValue="599">Tandur</option>
                            <option defaultValue="600">Tanuku</option>
                            <option defaultValue="1122">Tarakeshwar</option>
                            <option defaultValue="407">Tarn Taran</option>
                            <option defaultValue="35">Tawang</option>
                            <option defaultValue="531">Tehri Garhwal And Uttarkashi</option>
                            <option defaultValue="1120">Tenali</option>
                            <option defaultValue="602">Tezpur</option>
                            <option defaultValue="750">Tezu</option>
                            <option defaultValue="439">Thanjavur</option>
                            <option defaultValue="440">Theni</option>
                            <option defaultValue="581">Thiruvalla</option>
                            <option defaultValue="562">Thiruvananthapuram</option>
                            <option defaultValue="441">Thoothukudi</option>
                            <option defaultValue="327">Thoubal</option>
                            <option defaultValue="565">Thrissur</option>
                            <option defaultValue="281">Tikamgarh</option>
                            <option defaultValue="69">Tinsukia</option>
                            <option defaultValue="36">Tirap</option>
                            <option defaultValue="79">Tirhut</option>
                            <option defaultValue="442">Tiruchirapalli</option>
                            <option defaultValue="443">Tirunelveli</option>
                            <option defaultValue="601">Tirupati</option>
                            <option defaultValue="653">Tiruppur</option>
                            <option defaultValue="627">Tirur</option>
                            <option defaultValue="444">Tiruvallur</option>
                            <option defaultValue="445">Tiruvannamalai</option>
                            <option defaultValue="446">Tiruvarur</option>
                            <option defaultValue="823">Tonk</option>
                            <option defaultValue="235">Travancore</option>
                            <option defaultValue="353">Tuensang</option>
                            <option defaultValue="231">Tumkur</option>
                            <option defaultValue="414">Udaipur</option>
                            <option defaultValue="454">Udaipur (tripura)</option>
                            <option defaultValue="70">Udalguri</option>
                            <option defaultValue="832">Udham Singh Nagar</option>
                            <option defaultValue="181">Udhampur</option>
                            <option defaultValue="232">Udupi And Uttara Kannada</option>
                            <option defaultValue="731">Udwada</option>
                            <option defaultValue="282">Ujjain</option>
                            <option defaultValue="328">Ukhrul</option>
                            <option defaultValue="283">Umaria</option>
                            <option defaultValue="732">Umbergaon</option>
                            <option defaultValue="159">Una</option>
                            <option defaultValue="524">Unnao</option>
                            <option defaultValue="37">Upper Dibang Valley</option>
                            <option defaultValue="38">Upper Siang</option>
                            <option defaultValue="39">Upper Subansiri</option>
                            <option defaultValue="550">Uttar Dinajpur</option>
                            <option defaultValue="733">Vallabh Vidyanagar</option>
                            <option defaultValue="734">Valod</option>
                            <option defaultValue="127">Valsad</option>
                            <option defaultValue="579">Vapi</option>
                            <option defaultValue="447">Vellore</option>
                            <option defaultValue="616">Veraval</option>
                            <option defaultValue="284">Vidisha</option>
                            <option defaultValue="735">Vijapur</option>
                            <option defaultValue="558">Vijayawada</option>
                            <option defaultValue="448">Viluppuram</option>
                            <option defaultValue="736">Virpur</option>
                            <option defaultValue="449">Virudhunagar</option>
                            <option defaultValue="737">Visnagar</option>
                            <option defaultValue="21">Vizianagaram</option>
                            <option defaultValue="802">Vyara</option>
                            <option defaultValue="738">Waghodia</option>
                            <option defaultValue="22">Warangal</option>
                            <option defaultValue="317">Wardha</option>
                            <option defaultValue="318">Washim</option>
                            <option defaultValue="805">Wayanad</option>
                            <option defaultValue="335">West Garo Hills</option>
                            <option defaultValue="23">West Godavari</option>
                            <option defaultValue="40">West Kameng</option>
                            <option defaultValue="336">West Khasi Hills</option>
                            <option defaultValue="41">West Siang</option>
                            <option defaultValue="205">West Singhbhum</option>
                            <option defaultValue="354">Wokha</option>
                            <option defaultValue="803">Yadgir</option>
                            <option defaultValue="147">Yamuna Nagar</option>
                            <option defaultValue="319">Yavatmal</option>
                            <option defaultValue="752">Yingkiong</option>
                            <option defaultValue="865">Zirakpur</option>
                            <option defaultValue="745">Ziro</option>
                            <option defaultValue="355">Zunheboto</option>
                            <option defaultValue="455">Agra</option>
                            <option defaultValue="103">Ahmedabad</option>
                            <option defaultValue="457">Allahabad</option>
                            <option defaultValue="207">Bengaluru</option>
                            <option defaultValue="915">Abu Road</option>
                            <option defaultValue="886">Achalpur Paratwada</option>
                            <option defaultValue="920">Adampur</option>
                            <option defaultValue="988">Addanki</option>
                            <option defaultValue="989">Adoni</option>
                            <option defaultValue="925">Ahmedgarh</option>
                            <option defaultValue="949">Akluj</option>
                            <option defaultValue="888">Akot</option>
                            <option defaultValue="950">Alibag</option>
                            <option defaultValue="990">Amalapuram</option>
                            <option defaultValue="951">Amalner</option>
                            <option defaultValue="881">Ambhajogai</option>
                            <option defaultValue="991">Anakapalli</option>
                            <option defaultValue="1062">Anandapur</option>
                            <option defaultValue="914">Anupgarh</option>
                            <option defaultValue="877">Ashta</option>
                            <option defaultValue="992">Attur</option>
                            <option defaultValue="938">B C Road</option>
                            <option defaultValue="916">Balachaur</option>
                            <option defaultValue="928">Balasinor</option>
                            <option defaultValue="981">Balugaon</option>
                            <option defaultValue="922">Banga</option>
                            <option defaultValue="897">Barara</option>
                            <option defaultValue="880">Barshi</option>
                            <option defaultValue="883">Basmat</option>
                            <option defaultValue="1045">Bavla</option>
                            <option defaultValue="923">Begowal</option>
                            <option defaultValue="1060">Belonia</option>
                            <option defaultValue="891">Bhatapara</option>
                            <option defaultValue="917">Bhawanigarh</option>
                            <option defaultValue="982">Bhawanipatna</option>
                            <option defaultValue="1091">Bhimavaram</option>
                            <option defaultValue="919">Bhogpur</option>
                            <option defaultValue="243">Bhopal</option>
                            <option defaultValue="876">Biaora</option>
                            <option defaultValue="878">Bina Etawa</option>
                            <option defaultValue="929">Borsad</option>
                            <option defaultValue="1089">Botad</option>
                            <option defaultValue="893">Bramhapuri Wadsa</option>
                            <option defaultValue="899">Budhlada</option>
                            <option defaultValue="895">Butibori</option>
                            <option defaultValue="952">Chalisgaon</option>
                            <option defaultValue="1065">Chebri</option>
                            <option defaultValue="905">Cheeka</option>
                            <option defaultValue="987">Cheeka</option>
                            <option defaultValue="953">Chiplun</option>
                            <option defaultValue="912">Chomu</option>
                            <option defaultValue="954">Chopda</option>
                            <option defaultValue="993">Cumbum</option>
                            <option defaultValue="930">Dabhoi</option>
                            <option defaultValue="931">Dahanu Mh</option>
                            <option defaultValue="932">Dahegam</option>
                            <option defaultValue="1046">Dehgam</option>
                            <option defaultValue="1037">Derabassi</option>
                            <option defaultValue="1069">Dhamcheri</option>
                            <option defaultValue="889">Dhamnod</option>
                            <option defaultValue="933">Dharampur</option>
                            <option defaultValue="1035">Dharamshala</option>
                            <option defaultValue="1068">Dharmanagar</option>
                            <option defaultValue="994">Dharmavaram</option>
                            <option defaultValue="1039">Dhrol</option>
                            <option defaultValue="901">Ellenabad</option>
                            <option defaultValue="1093">Eluru</option>
                            <option defaultValue="939">Gangavathi</option>
                            <option defaultValue="1078">Gharunda</option>
                            <option defaultValue="1047">Ghotibudruk</option>
                            <option defaultValue="995">Giddalur</option>
                            <option defaultValue="898">Gidderbaha</option>
                            <option defaultValue="940">Gokak</option>
                            <option defaultValue="934">Gondal</option>
                            <option defaultValue="996">Gudur</option>
                            <option defaultValue="997">Guntakal</option>
                            <option defaultValue="906">Guru Har Sahai</option>
                            <option defaultValue="864">Haldia</option>
                            <option defaultValue="1041">Halvad</option>
                            <option defaultValue="941">Harpanahalli</option>
                            <option defaultValue="894">Hinghanghat</option>
                            <option defaultValue="1061">Hrishyamuk</option>
                            <option defaultValue="1082">Indri</option>
                            <option defaultValue="998">Jaggayyapeta</option>
                            <option defaultValue="1090">Jagraon</option>
                            <option defaultValue="955">Jamner</option>
                            <option defaultValue="983">Jeypore</option>
                            <option defaultValue="935">Jhalod</option>
                            <option defaultValue="1057">Jolaibari</option>
                            <option defaultValue="1071">Kadamtala</option>
                            <option defaultValue="999">Kadiri</option>
                            <option defaultValue="1000">Kallakurichi</option>
                            <option defaultValue="1066">Kamalghat</option>
                            <option defaultValue="1001">Karaikal</option>
                            <option defaultValue="956">Karjat</option>
                            <option defaultValue="942">Karwar</option>
                            <option defaultValue="1002">Kasibugga</option>
                            <option defaultValue="1003">Kavali</option>
                            <option defaultValue="1073">Khambhaliya</option>
                            <option defaultValue="887">Khamgaon</option>
                            <option defaultValue="957">Khopoli</option>
                            <option defaultValue="1063">Khowai</option>
                            <option defaultValue="908">Kishangarh</option>
                            <option defaultValue="958">Kopergaon</option>
                            <option defaultValue="913">Kotputli</option>
                            <option defaultValue="1004">Kovilpatti</option>
                            <option defaultValue="943">Kundapura</option>
                            <option defaultValue="944">Kushalnagar</option>
                            <option defaultValue="921">Lehargaga</option>
                            <option defaultValue="959">Lonavala</option>
                            <option defaultValue="926">Machiwara</option>
                            <option defaultValue="1058">Mahuripur</option>
                            <option defaultValue="1049">Maihar</option>
                            <option defaultValue="885">Malkapur</option>
                            <option defaultValue="1005">Mandapeta</option>
                            <option defaultValue="904">Mandi Dabwali</option>
                            <option defaultValue="1077">Mandigobind Garh</option>
                            <option defaultValue="879">Manendragarh</option>
                            <option defaultValue="1036">Manesar</option>
                            <option defaultValue="1059">Manubazar</option>
                            <option defaultValue="1006">Markapur</option>
                            <option defaultValue="1007">Mayiladuthurai</option>
                            <option defaultValue="1008">Mettupalayam</option>
                            <option defaultValue="1048">Mhow</option>
                            <option defaultValue="936">Morbi</option>
                            <option defaultValue="1085">Morinda</option>
                            <option defaultValue="1088">Nagda</option>
                            <option defaultValue="1086">Nahan</option>
                            <option defaultValue="1084">Nangal</option>
                            <option defaultValue="1092">Narasaraopet</option>
                            <option defaultValue="890">Narasinghpur</option>
                            <option defaultValue="960">Narayangaon</option>
                            <option defaultValue="1009">Narsapur</option>
                            <option defaultValue="910">Neemrana</option>
                            <option defaultValue="1080">Nelokheri</option>
                            <option defaultValue="1010">Neyveli</option>
                            <option defaultValue="945">Nipani</option>
                            <option defaultValue="1011">Nuziveedu</option>
                            <option defaultValue="961">Pachora</option>
                            <option defaultValue="1012">Palakollu</option>
                            <option defaultValue="1013">Palani</option>
                            <option defaultValue="1095">Palghar</option>
                            <option defaultValue="1042">Palitana</option>
                            <option defaultValue="1014">Palmaner</option>
                            <option defaultValue="962">Pandharpur</option>
                            <option defaultValue="1070">Panisagar</option>
                            <option defaultValue="1076">Panvel</option>
                            <option defaultValue="1087">Paonta Sahib</option>
                            <option defaultValue="984">Paradip</option>
                            <option defaultValue="1015">Parvathipuram</option>
                            <option defaultValue="1038">Parwanoo</option>
                            <option defaultValue="909">Patodi</option>
                            <option defaultValue="1079">Pehwa</option>
                            <option defaultValue="963">Pen</option>
                            <option defaultValue="964">Phaltan</option>
                            <option defaultValue="918">Phillaur</option>
                            <option defaultValue="1016">Piduguralla</option>
                            <option defaultValue="1017">Pileru</option>
                            <option defaultValue="1083">Pilpli</option>
                            <option defaultValue="965">Pimpalgaon</option>
                            <option defaultValue="902">Pundri</option>
                            <option defaultValue="896">Pusad</option>
                            <option defaultValue="980">Pusad</option>
                            <option defaultValue="946">Puttur</option>
                            <option defaultValue="966">Rahuri</option>
                            <option defaultValue="927">Raikot</option>
                            <option defaultValue="1018">Railway Koduru</option>
                            <option defaultValue="1019">Rajam</option>
                            <option defaultValue="1020">Rajapalayam</option>
                            <option defaultValue="967">Rajgurunagar</option>
                            <option defaultValue="1043">Rajula</option>
                            <option defaultValue="1021">Rayachoti</option>
                            <option defaultValue="1022">Repalle</option>
                            <option defaultValue="968">Roha</option>
                            <option defaultValue="937">Sachin</option>
                            <option defaultValue="985">Salepur</option>
                            <option defaultValue="1023">Samalkota</option>
                            <option defaultValue="969">Sawantwadi</option>
                            <option defaultValue="947">Sedam</option>
                            <option defaultValue="1053">Sembarambakkam</option>
                            <option defaultValue="986">Semiliguda</option>
                            <option defaultValue="970">Shahada</option>
                            <option defaultValue="948">Shahapur</option>
                            <option defaultValue="924">Shahkot</option>
                            <option defaultValue="971">Shikrapur</option>
                            <option defaultValue="972">Shirpur</option>
                            <option defaultValue="973">Shirur</option>
                            <option defaultValue="974">Shirval</option>
                            <option defaultValue="975">Shrigonda Kashti</option>
                            <option defaultValue="976">Shrirampur</option>
                            <option defaultValue="1075">Siddhpur</option>
                            <option defaultValue="1067">Sidhai Mohanpur</option>
                            <option defaultValue="1051">Singrauli</option>
                            <option defaultValue="1024">Sivakasi</option>
                            <option defaultValue="1056">Sonamura</option>
                            <option defaultValue="907">Sujangarh</option>
                            <option defaultValue="1025">Sullurpeta</option>
                            <option defaultValue="911">Suratgarh</option>
                            <option defaultValue="1094">Tadepalligudem</option>
                            <option defaultValue="900">Talawandi Saboo</option>
                            <option defaultValue="977">Talegaon Dabhade</option>
                            <option defaultValue="1052">Tambaram</option>
                            <option defaultValue="903">Taraori</option>
                            <option defaultValue="1081">Tarawari</option>
                            <option defaultValue="1064">Teliamura</option>
                            <option defaultValue="1026">Tenkasi</option>
                            <option defaultValue="1072">Thangadh</option>
                            <option defaultValue="1027">Tiruchendur</option>
                            <option defaultValue="1028">Tiruchengode</option>
                            <option defaultValue="1029">Tirupattur</option>
                            <option defaultValue="1055">Trichy</option>
                            <option defaultValue="1030">Tuni</option>
                            <option defaultValue="882">Udgir</option>
                            <option defaultValue="1031">Udhagamandalam</option>
                            <option defaultValue="1032">Udumalpet</option>
                            <option defaultValue="1074">Unjha</option>
                            <option defaultValue="1040">Vadinar</option>
                            <option defaultValue="1044">Viramgam</option>
                            <option defaultValue="1033">Virudhachalam</option>
                            <option defaultValue="1050">Waidhan</option>
                            <option defaultValue="892">Wani</option>
                            <option defaultValue="978">Warananagar</option>
                            <option defaultValue="884">Warud</option>
                            <option defaultValue="1034">Yemmiganur</option>
                            <option defaultValue="80">Chandigarh</option>
                            <option defaultValue="420">Chennai</option>
                            <option defaultValue="421">Coimbatore</option>
                            <option defaultValue="527">Dehradun</option>
                            <option defaultValue="551">Delhi</option>
                            <option defaultValue="556">Faridabad</option>
                            <option defaultValue="111">Gandhinagar</option>
                            <option defaultValue="554">Ghaziabad</option>
                            <option defaultValue="555">Gurgaon</option>
                            <option defaultValue="6">Hyderabad</option>
                            <option defaultValue="256">Indore</option>
                            <option defaultValue="411">Jaipur</option>
                            <option defaultValue="557">Kanpur</option>
                            <option defaultValue="234">Kochi</option>
                            <option defaultValue="541">Kolkata</option>
                            <option defaultValue="499">Lucknow</option>
                            <option defaultValue="430">Madurai</option>
                            <option defaultValue="506">Meerut</option>
                            <option defaultValue="302">Mumbai</option>
                            <option defaultValue="303">Nagpur</option>
                            <option defaultValue="553">Noida</option>
                            <option defaultValue="76">Patna</option>
                            <option defaultValue="309">Pune</option>
                            <option defaultValue="97">Raipur</option>
                            <option defaultValue="124">Surat</option>
                            <option defaultValue="316">Thane</option>
                            <option defaultValue="126">Vadodara</option>
                            <option defaultValue="525">Varanasi</option>
                            <option defaultValue="20">Visakhapatnam</option>
                          </select>
                          <span className="select2 select2-container select2-container--default select2-container--below" dir="ltr">
                            <span className="selection">
                              <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" title="Select your city" tabIndex={10} aria-labelledby="select2-city-container">
                                <span className="select2-selection__rendered" id="select2-city-container"><span className="select2-selection__placeholder">Select your city</span></span>
                                <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
                              </span>
                            </span>
                            <span className="dropdown-wrapper" aria-hidden="true"></span>
                          </span>
                          <span className="current_city_error_indicator help-block"></span>
                        </div>
                        <div className="form-group col-sm-4 hide" id="email_pq1_div">
                          <label>
                            Email Address
                            <a href="#;" data-toggle="tooltip" data-placement="right" title="" data-original-title="Share correct Email address to ensure timely communication regarding this application">
                              <span className="badge badge-warning">?</span>
                            </a>
                          </label>
                          <input
                            type="email"
                            placeholder="example@xyz.com"
                            className="form-control email required"
                            id="email"
                            name="email"
                            data-validation="email"
                            data-validation-error-msg="Please enter valid email address"
                            defaultValue=""
                            tabIndex={10}
                            maxLength={61}
                            autoComplete="Off"
                          />
                          <span className="email_error_indicator help-block"></span>
                        </div>
                        <div className="form-group col-sm-4">
                          <label>
                            Mobile Number
                            <a href="#;" data-toggle="tooltip" data-placement="right" title="" data-original-title="100% privacy guaranteed. We will never share your details."><span className="badge badge-warning">?</span></a>
                          </label>
                          <div className="input-group">
                            <span className="input-group-addon">+91</span>
                            <input
                              type="tel"
                              placeholder="9999999999"
                              className="form-control mobile required"
                              data-validation="required length"
                              data-validation-length="max10"
                              data-validation-error-msg="Please enter valid mobile number"
                              maxLength={10}
                              name="mobile_number"
                              id="mobile_number"
                              defaultValue=""
                              tabIndex={13}
                              autoComplete="Off"
                            />
                          </div>
                          <span className="mobile_error_indicator help-block"></span>
                        </div>
                        <div className="pq1_fields" id="pq1_fields">
                          <div className="form-group col-sm-4">
                            <label>Your Full Name&nbsp;&nbsp;&nbsp;<span className="absolute">(As per PAN Card)</span></label>
                            <input
                              type="text"
                              placeholder="Enter Your Full Name"
                              className="form-control name required"
                              name="full_name"
                              data-validation="required"
                              data-validation-error-msg="Enter your name as mentioned on your PAN card"
                              tabIndex={26}
                              defaultValue=""
                              maxLength={22}
                              autoComplete="Off"
                            />
                            <span className="full_name_error_indicator help-block"></span>
                          </div>
                          <div className="form-group col-sm-4 pq2_bureau_html_process_fields bureau_gender">
                            <label>Please Select Gender</label>
                            <div className="clearfix"></div>
                            <div className="row gender_label_male_female">
                              <input name="title" id="gender" className="hide" defaultValue="1" type="hidden" autoComplete="new" />
                              <div className="col-xs-6">
                                <div className="radio radio-info radio-inline">
                                  <label htmlFor="gender_0" className="male button pd10 bdr bg-Lgry hand dFB f-L gender_selected">
                                    Male
                                  </label>
                                </div>
                              </div>
                              <div className="col-xs-6">
                                <div className="radio radio-info radio-inline">
                                  <label htmlFor="gender_1" className="female button pd10 bdr bg-Lgry hand dFB f-L ">Female</label>
                                </div>
                              </div>
                            </div>
                            <span className="title_error_indicator help-block"></span>
                          </div>
                          <div className="form-group col-sm-4 col-md-4  pq2_bureau_html_process_fields bureau_pincode">
                            <label>Residence Pincode</label>
                            <span className="ui-helper-hidden-accessible" role="status" aria-live="polite">No search results.</span>
                            <span role="status" aria-live="polite" className="ui-helper-hidden-accessible"></span>
                            <input
                              id="pincode"
                              className="pincode text-box form-control ui-autoComplete-input required"
                              type="tel"
                              data-validation="required"
                              data-validation-error-msg="Please enter correct Pincode"
                              placeholder="Type slowly"
                              defaultValue=""
                              maxLength={6}
                              autoComplete="off"
                              name="pincode"
                              tabIndex={28}
                            />
                            <span className="pincode_error_indicator help-block"></span>
                          </div>

                          <div className="form-group col-sm-4 col-md-4  bureau_pan_number">
                            <label>
                              Your PAN card number <a href="#" data-toggle="tooltip" data-placement="right" title="" data-original-title=""><span className="badge badge-warning">?</span></a>
                            </label>
                            <input
                              id="pan_number"
                              className="pan_number text-box form-control required"
                              type="text"
                              data-validation="required"
                              data-validation-error-msg="Please enter correct pan card number"
                              placeholder="XXXXXXXXXX"
                              defaultValue=""
                              maxLength={10}
                              autoComplete="off"
                              name="pan_number"
                              tabIndex={25}
                            />
                            <span className="pan_number_error_indicator help-block hide"></span>
                          </div>
                          <div className="form-group col-sm-4 col-md-4" id="dob">
                            <label>Date of Birth</label>
                            <div className="row">
                              <div className="col-xs-4">
                                <select
                                  title="DD"
                                  className="form-control wsselectpicker required select2-hidden-accessible"
                                  id="day_of_birth"
                                  name="day_of_birth"
                                  data-validation="required"
                                  data-validation-error-msg="Please enter valid date of birth"
                                  tabIndex={-1}
                                  autoComplete="Off"
                                  aria-hidden="true"
                                >
                                  <option defaultValue=""></option>
                                  <option defaultValue="01">01</option>
                                  <option defaultValue="02">02</option>
                                  <option defaultValue="03">03</option>
                                  <option defaultValue="04">04</option>
                                  <option defaultValue="05">05</option>
                                  <option defaultValue="06">06</option>
                                  <option defaultValue="07">07</option>
                                  <option defaultValue="08">08</option>
                                  <option defaultValue="09">09</option>
                                  <option defaultValue="10">10</option>
                                  <option defaultValue="11">11</option>
                                  <option defaultValue="12">12</option>
                                  <option defaultValue="13">13</option>
                                  <option defaultValue="14">14</option>
                                  <option defaultValue="15">15</option>
                                  <option defaultValue="16">16</option>
                                  <option defaultValue="17">17</option>
                                  <option defaultValue="18">18</option>
                                  <option defaultValue="19">19</option>
                                  <option defaultValue="20">20</option>
                                  <option defaultValue="21">21</option>
                                  <option defaultValue="22">22</option>
                                  <option defaultValue="23">23</option>
                                  <option defaultValue="24">24</option>
                                  <option defaultValue="25">25</option>
                                  <option defaultValue="26">26</option>
                                  <option defaultValue="27">27</option>
                                  <option defaultValue="28">28</option>
                                  <option defaultValue="29">29</option>
                                  <option defaultValue="30">30</option>
                                  <option defaultValue="31">31</option>
                                </select>
                                <span className="select2 select2-container select2-container--default" dir="ltr">
                                  <span className="selection">
                                    <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" title="DD" tabIndex={22} aria-labelledby="select2-day_of_birth-container">
                                      <span className="select2-selection__rendered" id="select2-day_of_birth-container"><span className="select2-selection__placeholder">DD</span></span>
                                      <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
                                    </span>
                                  </span>
                                  <span className="dropdown-wrapper" aria-hidden="true"></span>
                                </span>
                              </div>
                              <div className="col-xs-4">
                                <select
                                  title="MM"
                                  className="form-control wsselectpicker required select2-hidden-accessible"
                                  id="month_of_birth"
                                  name="month_of_birth"
                                  data-validation="required"
                                  data-validation-error-msg="Please enter valid date of birth"
                                  tabIndex={-1}
                                  autoComplete="Off"
                                  aria-hidden="true"
                                >
                                  <option defaultValue=""></option>
                                  <option defaultValue="01">Jan</option>
                                  <option defaultValue="02">Feb</option>
                                  <option defaultValue="03">Mar</option>
                                  <option defaultValue="04">Apr</option>
                                  <option defaultValue="05">May</option>
                                  <option defaultValue="06">Jun</option>
                                  <option defaultValue="07">Jul</option>
                                  <option defaultValue="08">Aug</option>
                                  <option defaultValue="09">Sep</option>
                                  <option defaultValue="10">Oct</option>
                                  <option defaultValue="11">Nov</option>
                                  <option defaultValue="12">Dec</option>
                                </select>
                                <span className="select2 select2-container select2-container--default" dir="ltr">
                                  <span className="selection">
                                    <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" title="MM" tabIndex={23} aria-labelledby="select2-month_of_birth-container">
                                      <span className="select2-selection__rendered" id="select2-month_of_birth-container"><span className="select2-selection__placeholder">MM</span></span>
                                      <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
                                    </span>
                                  </span>
                                  <span className="dropdown-wrapper" aria-hidden="true"></span>
                                </span>
                              </div>
                              <div className="col-xs-4">
                                <select
                                  title="YYYY"
                                  className="form-control wsselectpicker required select2-hidden-accessible"
                                  id="year_of_birth"
                                  name="year_of_birth"
                                  data-validation="required"
                                  data-validation-error-msg="Please enter valid date of birth"
                                  tabIndex={-1}
                                  autoComplete="Off"
                                  aria-hidden="true"
                                >
                                  <option defaultValue=""></option>
                                  <option defaultValue="2005">2005</option>
                                  <option defaultValue="2004">2004</option>
                                  <option defaultValue="2003">2003</option>
                                  <option defaultValue="2002">2002</option>
                                  <option defaultValue="2001">2001</option>
                                  <option defaultValue="2000">2000</option>
                                  <option defaultValue="1999">1999</option>
                                  <option defaultValue="1998">1998</option>
                                  <option defaultValue="1997">1997</option>
                                  <option defaultValue="1996">1996</option>
                                  <option defaultValue="1995">1995</option>
                                  <option defaultValue="1994">1994</option>
                                  <option defaultValue="1993">1993</option>
                                  <option defaultValue="1992">1992</option>
                                  <option defaultValue="1991">1991</option>
                                  <option defaultValue="1990">1990</option>
                                  <option defaultValue="1989">1989</option>
                                  <option defaultValue="1988">1988</option>
                                  <option defaultValue="1987">1987</option>
                                  <option defaultValue="1986">1986</option>
                                  <option defaultValue="1985">1985</option>
                                  <option defaultValue="1984">1984</option>
                                  <option defaultValue="1983">1983</option>
                                  <option defaultValue="1982">1982</option>
                                  <option defaultValue="1981">1981</option>
                                  <option defaultValue="1980">1980</option>
                                  <option defaultValue="1979">1979</option>
                                  <option defaultValue="1978">1978</option>
                                  <option defaultValue="1977">1977</option>
                                  <option defaultValue="1976">1976</option>
                                  <option defaultValue="1975">1975</option>
                                  <option defaultValue="1974">1974</option>
                                  <option defaultValue="1973">1973</option>
                                  <option defaultValue="1972">1972</option>
                                  <option defaultValue="1971">1971</option>
                                  <option defaultValue="1970">1970</option>
                                  <option defaultValue="1969">1969</option>
                                  <option defaultValue="1968">1968</option>
                                  <option defaultValue="1967">1967</option>
                                  <option defaultValue="1966">1966</option>
                                  <option defaultValue="1965">1965</option>
                                  <option defaultValue="1964">1964</option>
                                  <option defaultValue="1963">1963</option>
                                  <option defaultValue="1962">1962</option>
                                  <option defaultValue="1961">1961</option>
                                  <option defaultValue="1960">1960</option>
                                  <option defaultValue="1959">1959</option>
                                </select>
                                <span className="select2 select2-container select2-container--default" dir="ltr">
                                  <span className="selection">
                                    <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" title="YYYY" tabIndex={24} aria-labelledby="select2-year_of_birth-container">
                                      <span className="select2-selection__rendered" id="select2-year_of_birth-container"><span className="select2-selection__placeholder">YYYY</span></span>
                                      <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
                                    </span>
                                  </span>
                                  <span className="dropdown-wrapper" aria-hidden="true"></span>
                                </span>
                              </div>
                              <span className="dob_error_indicator help-block hide"></span>
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-sm-4 bl_pq1_primary_account_with_main_div mainClassforBlandPlSalaryBank hide">
                          <label id="employment_bank_account"><span className="labelSpan">Salary Received In</span> </label>
                          <select
                            title="Select Bank"
                            className="form-control cselectpicker required select2-hidden-accessible"
                            data-live-search="true"
                            data-validation="required"
                            data-validation-error-msg="Please choose your bank"
                            name="salary_mode"
                            id="salary_mode"
                            tabIndex={-1}
                            autoComplete="Off"
                            aria-hidden="true"
                          >
                            <option defaultValue=""></option>
                            <optgroup></optgroup>
                            <optgroup><option defaultValue="2">HDFC</option><option defaultValue="3">SBI</option><option defaultValue="6">ICICI</option><option defaultValue="27">AXIS</option><option defaultValue="28">Standard Chartered Bank</option> </optgroup>
                            <optgroup>
                              <option defaultValue="39">Abhyuday Co-op Bank Ltd</option><option defaultValue="7">Allahabad Bank</option><option defaultValue="26">Andhra Bank</option><option defaultValue="5">Bank of Baroda</option><option defaultValue="8">Bank of India</option>
                              <option defaultValue="18">Bank of Maharasthra</option><option defaultValue="29">Bank of Rajasthan</option><option defaultValue="31">Canara Bank</option><option defaultValue="47">Catholic Syrian Bank</option>
                              <option defaultValue="9">Central Bank of India</option><option defaultValue="33">Citibank</option><option defaultValue="34">Corporation bank</option><option defaultValue="243">DBS</option><option defaultValue="11">Dena Bank</option>
                              <option defaultValue="35">Deutsche Bank</option><option defaultValue="23">Dhanalakshmi Bank Ltd</option><option defaultValue="32">Federal Bank</option><option defaultValue="1">HSBC</option><option defaultValue="40">IDBI Bank</option>
                              <option defaultValue="242">IDFC Bank</option><option defaultValue="36">ING Vysya</option><option defaultValue="51">Indian Bank</option><option defaultValue="37">Indian Overseas Bank</option><option defaultValue="67">IndusInd Bank</option>
                              <option defaultValue="21">J&amp;K Bank</option><option defaultValue="48">Karnataka Bank</option><option defaultValue="41">Karur Vysya Bank</option><option defaultValue="17">Kotak Bank</option><option defaultValue="24">Lakshmi Vilas bank</option>
                              <option defaultValue="42">Oriental Bank of Commerce</option><option defaultValue="19">Punjab &amp; Sind bank</option><option defaultValue="43">Punjab National Bank</option><option defaultValue="66">RBL Bank Ltd</option>
                              <option defaultValue="50">Saraswat Bank</option><option defaultValue="157">Shinhan Bank</option><option defaultValue="49">South Indian Bank</option><option defaultValue="15">State Bank of Bikaner &amp; Jaipur</option>
                              <option defaultValue="13">State Bank of Hyderabad</option><option defaultValue="38">State Bank of Indore</option><option defaultValue="14">State Bank of Mysore</option><option defaultValue="44">State Bank of Patiala</option>
                              <option defaultValue="45">State Bank of Travancore</option><option defaultValue="20">Syndicate Bank</option><option defaultValue="22">Tamilnad Mercantile Bank</option><option defaultValue="16">UCO Bank</option>
                              <option defaultValue="10">Union Bank of India</option><option defaultValue="46">United Bank of India</option><option defaultValue="12">Vijaya Bank</option><option defaultValue="65">Yes Bank</option>
                            </optgroup>
                          </select>
                          <span className="select2 select2-container select2-container--default" dir="ltr">
                            <span className="selection">
                              <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" title="Select Bank" tabIndex={29} aria-labelledby="select2-salary_mode-container">
                                <span className="select2-selection__rendered" id="select2-salary_mode-container"><span className="select2-selection__placeholder">Select Bank</span></span>
                                <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
                              </span>
                            </span>
                            <span className="dropdown-wrapper" aria-hidden="true"></span>
                          </span>
                          <span className="pq1_salry_mode_field_err_msg help-block"></span>
                          <span className="salary_mode_error_indicator help-block"></span>
                        </div>
                        <span className="mainspanResidenceType">
                          <div className="form-group col-sm-4">
                            <label>Residence Type</label>
                            <select
                              title="Select your Residence Type"
                              className="form-control wsselectpicker required select2-hidden-accessible"
                              id="residence_type_id"
                              name="residence_type_id"
                              data-validation="required"
                              data-validation-error-msg="Please select Residence Type"
                              tabIndex={-1}
                              autoComplete="Off"
                              aria-hidden="true"
                            >
                              <option defaultValue=""></option>
                              <option defaultValue="1">Self Owned</option>
                              <option defaultValue="19">Owned by Sibling</option>
                              <option defaultValue="2">Owned by Parents</option>
                              <option defaultValue="3">Rented</option>
                            </select>
                            <span className="select2 select2-container select2-container--default" dir="ltr">
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  title="Select your Residence Type"
                                  tabIndex={14}
                                  aria-labelledby="select2-residence_type_id-container"
                                >
                                  <span className="select2-selection__rendered" id="select2-residence_type_id-container"><span className="select2-selection__placeholder">Select your Residence Type</span></span>
                                  <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
                                </span>
                              </span>
                              <span className="dropdown-wrapper" aria-hidden="true"></span>
                            </span>
                            <span className="residence_type_id_error_indicator help-block hide"></span>
                          </div>

                          <div className="form-group col-sm-4 office_residence_type_id_div">
                            <label>Office/Factory type</label>
                            <select
                              title="Select your Office Residence Type"
                              className="form-control wsselectpicker required select2-hidden-accessible"
                              id="office_residence_type_id"
                              name="office_residence_type_id"
                              data-validation="required"
                              data-validation-error-msg="Please select Office Residence Type"
                              tabIndex={-1}
                              autoComplete="Off"
                              aria-hidden="true"
                            >
                              <option defaultValue=""></option>
                              <option defaultValue="1">Self Owned</option>
                              <option defaultValue="19">Owned by Sibling</option>
                              <option defaultValue="2">Owned by Parents</option>
                              <option defaultValue="3">Rented</option>
                            </select>
                            <span className="select2 select2-container select2-container--default" dir="ltr">
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  title="Select your Office Residence Type"
                                  tabIndex={15}
                                  aria-labelledby="select2-office_residence_type_id-container"
                                >
                                  <span className="select2-selection__rendered" id="select2-office_residence_type_id-container"><span className="select2-selection__placeholder">Select your Office Residence Type</span></span>
                                  <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
                                </span>
                              </span>
                              <span className="dropdown-wrapper" aria-hidden="true"></span>
                            </span>
                            <span className="office_residence_type_id_error_indicator help-block"></span>
                          </div>
                        </span>

                        <span className="bl_field_loan_against_collateral_span hide design_LAC_step1">
                          <div className="form-group col-sm-4">
                            <label>Wish to take Loan against Collateral ?</label>
                            <select
                              title="Select Collateral Type"
                              className="form-control loan_against_collateral_type wsselectpicker required select2-hidden-accessible"
                              id="loan_against_collateral_type"
                              data-validation="required"
                              tabIndex={-1}
                              autoComplete="Off"
                              aria-hidden="true"
                            >
                              <option defaultValue=""></option>
                              <option defaultValue="property">Property</option>
                              <option defaultValue="gold">Gold</option>
                              <option defaultValue="bill_discounting">Bill Discounting</option>
                              <option defaultValue="mutual_funds_securities">Mutual Funds / Securities</option>
                            </select>
                            <span className="select2 select2-container select2-container--default" dir="ltr">
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  title="Select Collateral Type"
                                  tabIndex={12}
                                  aria-labelledby="select2-loan_against_collateral_type-container"
                                >
                                  <span className="select2-selection__rendered" id="select2-loan_against_collateral_type-container"><span className="select2-selection__placeholder">Select Collateral Type</span></span>
                                  <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
                                </span>
                              </span>
                              <span className="dropdown-wrapper" aria-hidden="true"></span>
                            </span>
                          </div>
                        </span>
                      </div> */}
                    </div>
                    <div id="puckarConsent" className="checkbox">
                      <label htmlFor="check_term_condition">
                        <input type="checkbox" defaultChecked id="check_term_condition" />
                        <i className="helper"></i>
                        <span id="contract-view" className="tnc__text">
                          By submitting this form, you have read and agree to the
                          <Link href="/terms-of-use" target="_blank" rel="nofollow noopener" className="clr-blue4 TdecorN" passHref> Terms of Use </Link> &amp;
                          <Link href="/privacy-policy" target="_blank" rel="nofollow noopener" className="clr-blue4 TdecorN" passHref> Privacy Policy </Link>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="form-action">
                    <button className="submit-btn" type="button">Apply Now</button>
                  </div>
                </form>
              </div>
            </div>

            <div className="clear"></div>
          </div>
          <div className="main-bottom">
            <div className="l-content">
              <section className="l-section">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <h2 id="com"><strong>Personal Loan Interest Rates</strong></h2>
                    <p>
                      On our single online platform, the business loan interest rates offered by financial institutions vary from lender to lender and are further determined as per the applicant's profile, creditworthiness, eligibility & business requirements. Below mentioned is the tabular representation of the comparison of business loan interest rates offered by leading Banks and NBFCs.
                    </p>
                    <h3><strong>Comparing Interest Rates of Top Banks &amp; NBFCs in India - Jan 2023</strong></h3>
                    <table>
                      <tbody>
                        <tr>
                          <td width="278"><strong>Bank/NBFC/Fintech</strong></td>
                          <td width="242"><strong>Interest Rate</strong></td>
                        </tr>
                        <tr>
                          <td><Link href="/#">Bajaj Finserv</Link></td>
                          <td width="242">9.75% - 25% p.a.</td>
                        </tr>
                        <tr>
                          <td><Link href="/#">HDFC Bank</Link></td>
                          <td width="242">10.00% - 22.50% p.a.</td>
                        </tr>
                        <tr>
                          <td><Link href="/#">IIFL Finance</Link></td>
                          <td width="242">11.25% - 33.75% p.a.</td>
                        </tr>
                        <tr>
                          <td><Link href="/#">FlexiLoans</Link></td>
                          <td width="242">1% per month onwards</td>
                        </tr>
                        <tr>
                          <td><Link href="/#">ZipLoan</Link></td>
                          <td width="242">1% - 1.5% per month (Flat ROI)</td>
                        </tr>
                        <tr>
                          <td><Link href="/#">ICICI Bank</Link></td>
                          <td width="242">12.25% - 13.35% p.a.</td>
                        </tr>
                        <tr>
                          <td><Link href="/#">Axis Bank</Link></td>
                          <td width="242">14.65% - 18.90% p.a.</td>
                        </tr>
                        <tr>
                          <td><Link href="/#">Indifi Finance</Link></td>
                          <td width="242">15% - 24% p.a.</td>
                        </tr>
                        <tr>
                          <td><Link href="/#">Kotak Mahindra Bank</Link></td>
                          <td width="242">16% - 19.99% p.a.</td>
                        </tr>
                        <tr>
                          <td><Link href="/#">RBL Bank</Link></td>
                          <td width="242">17.85% - 21.35% p.a.</td>
                        </tr>
                        <tr>
                          <td><Link href="/#">Lendingkart Finance</Link></td>
                          <td width="242">1.5% - 2% per month</td>
                        </tr>
                        <tr>
                          <td><Link href="/#">Tata Capital Finance</Link></td>
                          <td width="242">19% p.a. onwards</td>
                        </tr>
                        <tr>
                          <td><Link href="/#">NeoGrowth Finance</Link></td>
                          <td width="242">24% p.a. (APR)</td>
                        </tr>
                        <tr>
                          <td><Link href="/#">Hero FinCorp</Link></td>
                          <td width="242">Up to 26% p.a.</td>
                        </tr>
                      </tbody>
                    </table>
                    <div><strong>Note:</strong> Rates as of 23 January 2023</div><br />
                    <div>Financial institutions offer collateral-free business loans of amounts maximum of up to Rs. 2 crores, whereas there is no minimum limit to borrow. Moreover, Small Business Loans, Startup Loans, and Micro Loans are also available for individuals, self-employed professionals, business owners, Startups, MSMEs, and other business entities at competitive interest rates.</div>
                    <h2><strong>Fees &amp; Charges</strong></h2>
                    <p>
                      The business loan fees and charges or any type of business loan shall vary from lender to lender and case to case. Usually, the fees and charges depend on the applicant's profile, creditworthiness, nature and type of business, desired loan amount, offered interest rate, repayment tenure, and several other factors.
                    </p>
                    <h2><strong>Types of Business Loans in India</strong></h2>
                    <ul>
                      <li>
                        <Link href="/#" target="_blank" rel="noopener"><strong>Term Loan&nbsp;</strong></Link>is offered under various types, such as short-term loan, long-term loan and other small business loans. The loan amount offered under term loan depends on the applicant’s profile and business requirements that can be repaid in 12 months to 5 years, in the form of EMIs. Term loans are divided into two parts, unsecured business loans, and secured business loans. Secured loans require collateral to be submitted with the lender, which is not the case with unsecured business loans.
                      </li>
                      <li>
                        <Link href="/#" target="_blank" rel="noopener"><strong>Working Capital Loan</strong></Link>&nbsp;are availed to meet the day-to-day business requirements or to manage business cash flow. The working capital loan can be availed for various other purposes, such as business expansion, buying equipment or machinery, purchasing raw materials or goods, paying off salaries or rent, enhancing inventory, and much more. Usually, the repayment tenure offered by most lenders is up to 12 months which shall exceed as per business requirements and the sole discretion of the lender.
                      </li>
                      <li>
                        <strong><Link href="/#" target="_blank" rel="noopener">Bill/Invoice Discounting</Link>&nbsp;</strong>is a financial instrument offered by Banks/NBFCs. Bill Discounting is a source of working capital finance for the seller of goods on credit. It is a discount that a financial institution takes from a seller’s customer. Through the payment being made by letter of credit, the buyer has the option of buying goods from the seller. Bills that come under bill discounting are termed Bills Of Exchange.
                      </li>
                      <li>
                        <strong><Link href="/#" target="_blank" rel="noopener">Letter of Credit (LC)</Link>&nbsp;</strong> is a payment instrument used mainly in international trade in which the bank provides a monetary guarantee to enterprises that deal in the import and export of goods. Enterprises doing business overseas have to deal with unknown suppliers and they require assurance of payment before performing any transaction. Therefore, a letter of credit is important to provide payment assurance to the suppliers or exporters.
                      </li>
                      <li>
                        <Link href="/#" target="_blank" rel="noopener"><strong>Point-of-Sale (POS) Loan / Merchant Cash Advance&nbsp;</strong></Link> is a type of credit facility wherein merchants offer funding to their customers at the point of their purchase. Business owners, Enterprises, MSMEs, Entrepreneurs, and Retailers can avail such funding. Loans against POS machines to start a new business or to manage their existing businesses. POS Loan, also termed Merchant Cash Advance is a loan type in which the sanctioned amount depends on the business volume generated via POS terminals.
                      </li>
                      <li>
                        <Link href="/#" target="_blank" rel="noopener"><strong>Overdraft (OD)</strong></Link>&nbsp; means overdrawing money from one’s current/savings account even if the account balance is zero or even below. An agreed rate of interest will be charged if the overdrawn amount is within the limits of a preceding agreement. The interest rate is charged only on the utilized amount of the total withdrawal or sanctioned limit.
                      </li>
                    </ul>
                    <h2><strong>Business Loan Eligibility Criteria</strong></h2>
                    <ul>
                      <li>Business Tenure: Minimum 1 year or above</li>
                      <li>Minimum Annual Turnover: Shall vary from lender to lender</li>
                      <li>Credit Score: 750 or above</li>
                      <li>Applicants with No past loan defaults with any financial institutions</li>
                      <li><strong>Eligible Entities: </strong></li>
                      <li>Individuals, Business Owners, Entrepreneurs, Self-employed professionals (CAs/CSs/Doctors/Architects), Startups, and MSMEs</li>
                      <li>Private and Public Limited Companies, Sole Proprietorships, Partnership Firms, Limited Liability Partnerships (LLPs), and Large Enterprises engaged only in the Manufacturing, Trading, or Services Sectors</li>
                      <li>NGOs, Co-operative Societies and Trusts, etc.</li>
                    </ul>
                    <h2><strong>Documentation&nbsp;for Business Loan</strong></h2>
                    <ul>
                      <li>Duly filled application form along with passport-sized photographs</li>
                      <li>KYC Documents of the applicant, including PAN card, Passport, Aadhar Card, Driving License, Voter ID card, Utility Bills (Water/Electricity Bills)</li>
                      <li>Last 1 years’ bank statemen</li>
                      <li>Copy of Non-Collateral Overdraft, if any</li>
                      <li>Copy of Business Incorporation</li>
                      <li>Any other document required by the lender</li>
                    </ul>
                    <h2 className="hd"><strong>How to Apply for a business Loan online?</strong></h2>
                    <p>Apply for Business Loan by following below mentioned 4 simple steps:</p>
                    <ul>
                      <li>Fill in the required fields as mentioned in the form and Check the box to agree on terms and further Click to ''Unlock Best Offers''.</li>
                      <li>Further you will be required to mention your company details, and basic personal information, along with your registered mobile number and email address.</li>
                      <li>After submitting all the details, the bank's representative will contact you to proceed with loan formalities.</li>
                      <li>Once your loan application and documents are verified and approved by the bank, within defined working days the loan amount shall get disbursed in your mentioned bank account.</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default businessLoan;