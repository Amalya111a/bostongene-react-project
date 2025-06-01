import React, {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {Card,Typography,Form,Input,DatePicker,TimePicker,Button,message} from "antd";
import dayjs from 'dayjs';
import{submitAppointment} from "../../services/appointmentService";

const {Title,Text} = Typography;
const Appointment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const doctor = location.state?.doctor;

  const [loading, setLoading] = useState(false);
  const onFinish = async (values: any) => {
    const payload = {
      doctorId: doctor?.id,
      doctorName:`${doctor?.name} ${doctor?.surname}`,
      patientName: values.patientName,
      phoneNumber: values.phoneNumber,
      date: values.date.format('YYYY-MM-DD'),
      time: values.time.format('HH:mm'),
    };
    try {
      setLoading(true);
      await submitAppointment(payload);
      message.success("Appointment booked!");
      navigate("/doctors");
    }catch(err) {
      message.error("Failed to submit Appointment");
    }finally {
      setLoading(false);
    }
  };
  if (!doctor) {
    return <p>No doctor selected.</p>
  }
  return (
      <div style={{maxWidth:600,margin:"auto",padding: 20}}>
        <Card>
          <Title level={3}>Book Appointment with {doctor.name} {doctor.surname}</Title>

          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item label="Your Name" name = "patientName" rules={[{ required: true, message: "Please enter your name" }]}>
              <Input/>
            </Form.Item>
            <Form.Item label= "Phone Number" name= "phone" rules={[{required:true}]}>
              <Input/>
            </Form.Item>
            <Form.Item label="Appointment Date" name="date" rules={[{required:true}]}>
              <DatePicker style={{width:'100%'}} disabledDate={(current) => current && current < dayjs().startOf('day')}/>
            </Form.Item>
            <Form.Item label="Time" name="time" rules={[{required:true}]}>
              <TimePicker style={{width:'100%'}} minuteStep={15} format="HH:mm" />
            </Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Submit
            </Button>
          </Form>
        </Card>
      </div>
  )

};

export default Appointment;
