import React, { useEffect, useState } from "react";
import { Button, Card, Row, Col } from "antd";
import styles from "./Membership.module.css";
import apiClient from "../../api"; 
import Loading from "../../components/Loading/Loading"; 

const { Meta } = Card;

const Membership = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await apiClient.get("/membership");
        setPlans(response);
      } catch (error) {
        console.error("error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  if (loading) {
    return <Loading />; 
  }

  return (
    <div className={styles.membershipContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Planını Seç</h1>
        <p className={styles.description}>
        Sənin ehtiyaclarına ən uyğun planı seç və bu gün yola başla!
        </p>
      </div>

      <div className={styles.plans}>
        <Row gutter={[16, 16]} className="mx-auto">
          {plans.map((plan, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <Card title={plan.name} bordered={false} hoverable className={styles.planCard}>
                <h3 className={styles.price}>
                  ${plan.price} <span className={styles.period}>/{plan.period}</span>
                </h3>
                <Meta description={plan.description} />
                
                <Button type="dark" className={styles.selectButton}>
                  {plan.buttonText}
                </Button>

                <ul className={styles.benefits}>
                  {plan.benefits.map((benefit, i) => (
                    <li key={i} className={styles.benefitItem}>
                      ⬛ {benefit}
                    </li>
                  ))}
                </ul>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Membership;
