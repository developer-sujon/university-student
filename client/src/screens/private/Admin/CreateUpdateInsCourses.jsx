//External lib imports
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Container, Button, Card, Form, Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

//Internal lib imports
import Layout from '../../../layout/Layout';
import {
  useInsCoursesCreateMutation,
  useInsCoursesListQuery,
  useInsCoursesUpdateMutation,
} from '../../../redux/services/inccoursesService';
import { formatDate } from '../../../utils/DateFormatter';

const CreateUpdateInsCourses = () => {
  let [objectID, SetObjectID] = useState(null);
  const [details, setDetails] = useState({
    InsCoursesCode: '',
    InsCoursesName: '',
    InsCoursesInstructor: '',
    seatsLimit: 0,
    registrationDeadline: formatDate(new Date()),
  });

  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data: allInsCourses } = useInsCoursesListQuery();
  const [InsCoursesCreate, { isLoading: createLoading, isSuccess: createSuccess }] = useInsCoursesCreateMutation();
  const [InsCoursesUpdate, { isLoading: updateLoading, isSuccess: updateSuccess }] = useInsCoursesUpdateMutation();

  useEffect(() => {
    let params = new URLSearchParams(window.location.search);
    let id = params.get('id');
    if (id !== null) {
      SetObjectID(id);
    }

    if (objectID && allInsCourses) {
      setDetails(allInsCourses?.data?.find((item) => item.id === objectID));
    }
  }, [objectID, allInsCourses]);

  const {
    control,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: details,
    resolver: yupResolver(
      yup.object({
        InsCoursesCode: yup.string().required(t('InsInsCoursesname is required')),
        InsCoursesName: yup.string().required(t('InsInsCoursesname is required')),
        InsCoursesInstructor: yup.string().required(t('InsInsCoursesinstructor is required')),
        seatsLimit: yup
          .number(t('seats limit is required'))
          .required(t('seats limit is required'))
          .min(1, 'seats limit must be greater than or equal to 1'),
        registrationDeadline: yup.date().required(t('InsInsCoursesregistration deadline is required')),
      })
    ),
  });

  useEffect(() => {
    if (details) {
      reset(details);
    }
  }, [details]);

  /*
   * form handle submit
   */
  const submitForm = ({ InsCoursesCode, InsCoursesName, InsCoursesInstructor, seatsLimit, registrationDeadline }) => {
    const postBody = {
      InsCoursesCode,
      InsCoursesName,
      InsCoursesInstructor,
      seatsLimit,
      registrationDeadline,
    };
    if (!objectID) {
      InsCoursesCreate(postBody);
    } else {
      InsCoursesUpdate({ id: objectID, postBody });
    }
  };

  useEffect(() => {
    if (createSuccess || updateSuccess) {
      navigate('/elective-InsCourses');
    }
  }, [createSuccess, updateSuccess]);

  return (
    <Layout>
      <Container>
        <Card>
          <Card.Body>
            <Row>
              <h5>{t(`${objectID ? 'update InsCourses' : 'save InsCourses'}`)}</h5>
              <hr className="bg-light" />
              <Col>
                <Form onSubmit={handleSubmit(submitForm)} onReset={reset}>
                  <Row class>
                    <Col sm={4}>
                      <Form.Group className="mb-3" controlId="InsCoursesCode">
                        <Form.Label>{t('InsInsCoursescode')}</Form.Label>
                        <Controller
                          control={control}
                          name="InsCoursesCode"
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Form.Control
                              onChange={onChange}
                              defaultValue={value}
                              ref={ref}
                              isInvalid={errors.InsCoursesCode}
                              placeholder={t('InsInsCoursescode of the InsCourses')}
                              type="text"
                              size="sm"
                            />
                          )}
                        />
                        {errors.InsCoursesCode && (
                          <Form.Text className="text-danger">{errors.InsCoursesCode.message}</Form.Text>
                        )}
                      </Form.Group>
                    </Col>
                    <Col sm={4}>
                      <Form.Group className="mb-3" controlId="InsCoursesName">
                        <Form.Label>{t('InsInsCoursesname')}</Form.Label>
                        <Controller
                          control={control}
                          name="InsCoursesName"
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Form.Control
                              onChange={onChange}
                              defaultValue={value}
                              ref={ref}
                              isInvalid={errors.InsCoursesName}
                              placeholder={t('InsInsCoursesname of the InsCourses')}
                              type="text"
                              size="sm"
                            />
                          )}
                        />
                        {errors.InsCoursesName && (
                          <Form.Text className="text-danger">{errors.InsCoursesName.message}</Form.Text>
                        )}
                      </Form.Group>
                    </Col>
                    <Col sm={4}>
                      <Form.Group className="mb-3" controlId="InsCoursesInstructor">
                        <Form.Label>{t('InsInsCoursesinstructor')}</Form.Label>
                        <Controller
                          control={control}
                          name="InsCoursesInstructor"
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Form.Control
                              onChange={onChange}
                              defaultValue={value}
                              ref={ref}
                              isInvalid={errors.InsCoursesInstructor}
                              placeholder={t('InsInsCoursesinstructor of the InsCourses')}
                              type="text"
                              size="sm"
                            />
                          )}
                        />
                        {errors.InsCoursesInstructor && (
                          <Form.Text className="text-danger">{errors.InsCoursesInstructor.message}</Form.Text>
                        )}
                      </Form.Group>
                    </Col>
                    <Col sm={4}>
                      <Form.Group className="mb-3" controlId="seatsLimit">
                        <Form.Label>{t('seats limit')}</Form.Label>
                        <Controller
                          control={control}
                          name="seatsLimit"
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Form.Control
                              onChange={onChange}
                              defaultValue={value}
                              ref={ref}
                              isInvalid={errors.seatsLimit}
                              placeholder={t('seats limit of the InsCourses')}
                              type="number"
                              size="sm"
                            />
                          )}
                        />
                        {errors.seatsLimit && <Form.Text className="text-danger">{errors.seatsLimit.message}</Form.Text>}
                      </Form.Group>
                    </Col>
                    <Col sm={4}>
                      <Form.Group className="mb-3" controlId="registrationDeadline">
                        <Form.Label>{t('registration deadline')}</Form.Label>
                        <Controller
                          control={control}
                          name="registrationDeadline"
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Form.Control
                              onChange={onChange}
                              defaultValue={value}
                              ref={ref}
                              isInvalid={errors.registrationDeadline}
                              type="date"
                              size="sm"
                            />
                          )}
                        />
                        {errors.registrationDeadline && (
                          <Form.Text className="text-danger">{errors.registrationDeadline.message}</Form.Text>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={4}>
                      <Button size="sm" className="mt-2" type="submit">
                        {createLoading || updateLoading ? <Spinner size="sm" color="light" /> : t('save change')}
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </Layout>
  );
};

export default CreateUpdateInsCourses;
