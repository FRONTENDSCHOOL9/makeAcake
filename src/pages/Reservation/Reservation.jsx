import Button from "@components/Buttons/Button";
import AppCalendar from "@components/Calendar/AppCalendar";
import Checkbox from "@components/Checkbox/Checkbox";
import GenerateTimeTable from "@pages/Reservation/GenerateTimeTable";
import { Label, ReservationForm, ReservationSection, SelectSizeForm, StyledReservation } from "@pages/Reservation/styles/ReservationStyles";
import useCustomAxios from "@query/useCustomAxios.mjs";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useRecoilValue } from "recoil";
import { memberState } from "@recoil/atoms";
import { useForm } from "react-hook-form";
import { Error } from "@pages/Login/styles/LoginStyles";

function Reservation() {
  const user = useRecoilValue(memberState);
  const { productId } = useParams();
  const axios = useCustomAxios();
  const { _id } = useParams();

  // const [ cake, setCake ] = useState(null);
  // const [ selectedOption, setSelectedOption ] = useState(null);
  // const [ selectedTime, setSelectedTime ] = useState(null);
  const navigate =useNavigate();
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    setError
  } = useForm();

  const { data } = useQuery({
    queryKey: ['products', productId],
    queryFn: () => axios.get(`/products/${productId}`),
    select: response => response.data,
    suspense: false
  });

  const onSubmit = async (formData) => {
    console.log('formData: ', formData);
    if (!user) {
      confirm("로그인 후 이용 가능합니다. \n 로그인 하시겠습니까?");
      navigate("/login")
    } else {
      try {
        // formData.type = 'product';
        const data = {
          products: [
            {
              _id: +productId,
              quantity: 1
            }
          ],
          extra: formData
        };
        const res = await axios.post('/orders', data);
        alert("예약이 완료되었습니다 🎉")
        navigate("/");
      } catch (err) {
        if (err.response?.data.erros) {
          err.response?.data.errors.forEach((error) => setError(error.path, { message: error.msg}));
        } else if (err.response?.data.message) {
          console.log(err.response?.data.message);
        }
    }

    }
  }


  // console.log('data: ', data);
  const item = data?.item;
  // console.log('item: ',item);
  const options = item?.options;
  // console.log('options: ', options);

  const extra = options?.map(item => item.extra);
  // console.log('extra: ', extra);
  const size = extra?.map(item => item.size);
  // console.log('size: ', size);

  const imgSrc = item && `${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.mainImages[0].name}`



  // const handleTimeClick = (time) => {
  //   setSelectedTime(time);
  //   console.log('selectedTime', selectedTime);
  //   console.log('time', time);
  // };


  return (
    <StyledReservation>
      <div className="header">
        <h2>예약하기</h2>
      </div>
      { data && 
        <>
          <img className="cakeImage" src={imgSrc} alt="cakeImage" />
            <div className="main">
              <h3>{ item.name }</h3>
              <ReservationSection>
                {/* <div className="main-time">
                  <h4>1. 픽업 날짜와 시간을 선택해 주세요.</h4>
                  <AppCalendar />
                  <div className="time-title">오전</div>
                  <ul>
                    <GenerateTimeTable startTime={"2021-01-01T09:30:00"} endTime={"2021-01-01T11:30:00"} handleTimeClick={handleTimeClick} selectedTime={selectedTime} />  
                  </ul>
                  <div className="time-title">오후</div>
                  <ul>
                    <GenerateTimeTable startTime={"2021-01-01T12:00:00"} endTime={"2021-01-01T21:30:00"} handleTimeClick={handleTimeClick} selectedTime={selectedTime}/>  
                  </ul>
                </div> */}
                <div className="main-form">
                  <h4>1. 예약 정보를 확인해 주세요.</h4>
                  <ReservationForm  onSubmit={handleSubmit(onSubmit)}>
                    <SelectSizeForm>
                      <label className="form-size-label" htmlFor="size">1. 사이즈를 선택해 주세요.</label>
                        { size?.map((item, index) => 
                          (
                            <>
                              <input
                                className="form-size-btn"
                                {...register("size")}
                                key={index + 'size'}
                                type="radio"
                                value={item}
                                id={item}
                                name="size"
                              />
                              <Label className="form-size-name" key={index + 'sizeLabel'} htmlFor={item}>{item}</Label>
                            </>
                          )
                          )
                        }
                    </SelectSizeForm>
                    
                    <label htmlFor="lettering">2. 레터링 정보를 기입해 주세요.</label>
                        <input 
                          type="text" 
                          id="lettering" 
                          placeholder="레터링 이름/문구를 적어주세요."
                          { ...register('lettering')}
                        />
                        { errors.lettering && <Error>{errors.lettering.message}</Error>}
                        <label htmlFor="request">3. 요청 사항이 있다면 남겨주세요.</label>
                        <input 
                          type="text" 
                          id="request"
                          placeholder="요청 사항을 적어주세요"
                          { ...register('request')}
                        />
                        <label htmlFor="pickupName">4. 픽업하시는 분 성함을 입력해 주세요.</label>
                        <input 
                          type="text" 
                          id="pickupName" 
                          placeholder="픽업하시는 분의 본명을 적어주세요."
                          { ...register('pickupName', {
                            required: "픽업자 명은 꼭 남겨주셔야 합니다.",
                          })}
                        />
                        { errors.pickupName && <p className="error-message">{errors.pickupName.message}</p>}
                        <label htmlFor="pickupDate">5. 픽업 날짜를 선택해 주세요.</label>
                        <input 
                          type="date" 
                          id="pickupDate" 
                          placeholder="픽업하시는 분의 본명을 적어주세요."
                          { ...register('pickupDate', {
                            required: "픽업 날짜는 꼭 선택해 주셔야 합니다.",
                          })}
                        />
                        { errors.pickupName && <p className="error-message">{errors.pickupName.message}</p>}
                      {/* <div>
                        <label htmlFor="size">1. 사이즈를 선택해 주세요.</label>
                        <div className="cake-option">
                          { size?.map((item, index) => (
                            <button 
                              type="button"
                              key={index}>{item}</button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label htmlFor="lettering">2. 레터링 정보를 기입해 주세요.</label>
                        <input 
                          type="text" 
                          id="lettering" 
                          placeholder="레터링 이름/문구를 적어주세요."
                          { ...register('lettering')}
                        />
                        { errors.lettering && <Error>{errors.lettering.message}</Error>}
                      </div>
                      <div>
                        <label htmlFor="request">3. 요청 사항이 있다면 남겨주세요.</label>
                        <input 
                          type="text" 
                          id="request"
                          placeholder="요청 사항을 적어주세요"
                          { ...register('request')}
                        />
                      </div>
                      <div>
                        <label htmlFor="pickupName">4. 픽업하시는 분 성함을 입력해 주세요.</label>
                        <input 
                          type="text" 
                          id="pickupName" 
                          placeholder="픽업하시는 분의 본명을 적어주세요."
                          { ...register('pickupName', {
                            required: "픽업자 명은 꼭 남겨주셔야 합니다.",
                          })}
                        />
                        { errors.pickupName && <p className="error-message">{errors.pickupName.message}</p>}
                      </div>      
                      <div>
                        <label htmlFor="pickupDate">5. 픽업 날짜와 시간을 선택해 주세요.</label>
                        <input 
                          type="month" 
                          id="pickupDate" 
                          placeholder="픽업하시는 분의 본명을 적어주세요."
                          { ...register('pickupDate', {
                            required: "픽업자 명은 꼭 남겨주셔야 합니다.",
                          })}
                        />
                        { errors.pickupName && <p className="error-message">{errors.pickupName.message}</p>}
                      </div>             
                      <div className="main-check">
                        <h4>3. 예약 확정 전 꼭 확인해 주세요.</h4>
                        <Checkbox id="checkbox1" checked={true}>입금 확인 후 취소가 불가합니다.</Checkbox>
                        <Checkbox id="checkbox2">픽업 시간을 꼭 지켜주세요.</Checkbox>
                        <Checkbox id="checkbox3 checked">예약 후 문자메시지를 확인해 주세요.</Checkbox>
                      </div> */}
                    <Button type="submit">예약</Button>
                  </ReservationForm>
                </div>


              </ReservationSection>
            </div>
        </>
      }
      
    </StyledReservation>
  )
}

export default Reservation;