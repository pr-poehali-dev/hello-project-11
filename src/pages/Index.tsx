import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { ChatWidget } from '@/components/ChatWidget';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const tours = [
    {
      id: 1,
      title: 'Мальдивы',
      description: 'Райский отдых на белоснежных пляжах',
      price: 'от 120 000 ₽',
      duration: '7 ночей',
      image: 'https://cdn.poehali.dev/projects/f1b82d2e-7120-4eb3-8e02-1849ba96c914/files/e554ea6d-2d75-4c1c-98b4-57db39a46d4c.jpg',
      tag: 'Популярное'
    },
    {
      id: 2,
      title: 'Европа',
      description: 'Путешествие по старинным городам',
      price: 'от 85 000 ₽',
      duration: '10 ночей',
      image: 'https://cdn.poehali.dev/projects/f1b82d2e-7120-4eb3-8e02-1849ba96c914/files/068f43a8-8865-4316-aacc-4b950f8b3c06.jpg',
      tag: 'Хит сезона'
    },
    {
      id: 3,
      title: 'Альпы',
      description: 'Активный отдых в горах',
      price: 'от 95 000 ₽',
      duration: '5 ночей',
      image: 'https://cdn.poehali.dev/projects/f1b82d2e-7120-4eb3-8e02-1849ba96c914/files/fa79df03-b2d6-4d20-9ef5-acda4c5a088a.jpg',
      tag: 'Новинка'
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Анна Петрова',
      text: 'Незабываемое путешествие! Всё организовано на высшем уровне. Спасибо команде "Глобус"!',
      rating: 5,
      tour: 'Мальдивы'
    },
    {
      id: 2,
      name: 'Дмитрий Иванов',
      text: 'Отличный сервис, внимательные менеджеры. Европейский тур превзошёл все ожидания.',
      rating: 5,
      tour: 'Европа'
    },
    {
      id: 3,
      name: 'Елена Смирнова',
      text: 'Горы, природа, эмоции! Всё было идеально спланировано. Рекомендую всем!',
      rating: 5,
      tour: 'Альпы'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50/30 to-orange-50/20">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Globe" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-primary">Глобус</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('tours')} className="text-foreground hover:text-primary transition-colors font-medium">
                Туры
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-foreground hover:text-primary transition-colors font-medium">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors font-medium">
                О нас
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors font-medium">
                Контакты
              </button>
            </nav>
            <Button className="bg-secondary hover:bg-secondary/90">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </header>

      <section id="hero" className="py-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Откройте мир с "Глобус"
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Путешествия вашей мечты начинаются здесь. Экзотические пляжи, горные вершины и древние города ждут вас!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8" onClick={() => scrollToSection('tours')}>
              <Icon name="MapPin" size={20} className="mr-2" />
              Выбрать тур
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-2" onClick={() => scrollToSection('contacts')}>
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Онлайн-чат
            </Button>
          </div>
        </div>
      </section>

      <section id="tours" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 animate-slide-up">
            Популярные направления
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative h-64 overflow-hidden">
                  <img src={tour.image} alt={tour.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">{tour.tag}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{tour.title}</CardTitle>
                  <CardDescription className="text-base">{tour.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Calendar" size={18} />
                      <span>{tour.duration}</span>
                    </div>
                    <span className="text-2xl font-bold text-primary">{tour.price}</span>
                  </div>
                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    <Icon name="Plane" size={18} className="mr-2" />
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">Отзывы наших клиентов</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-secondary fill-secondary" />
                      ))}
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit">{review.tour}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-4xl font-bold mb-6">О турагентстве "Глобус"</h3>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Мы — команда профессионалов с 15-летним опытом в туристической индустрии. 
            Наша миссия — делать путешествия доступными, безопасными и незабываемыми. 
            Мы работаем напрямую с отелями и авиакомпаниями, что позволяет предлагать лучшие цены.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-2">5000+</h4>
              <p className="text-muted-foreground">Довольных клиентов</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Globe" size={32} className="text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-2">50+</h4>
              <p className="text-muted-foreground">Стран мира</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-2">15 лет</h4>
              <p className="text-muted-foreground">На рынке</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-bold text-center mb-12">Свяжитесь с нами</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Phone" size={24} className="text-secondary" />
                  Телефон
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+7 (960) 294-92-02</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Mail" size={24} className="text-accent" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">info-globus-travel@inbox.ru</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Globe" size={28} />
            <span className="text-2xl font-bold">Глобус</span>
          </div>
          <p className="text-white/80 mb-4">Ваш проводник в мир путешествий</p>
          <div className="flex gap-6 justify-center">
            <Icon name="Facebook" size={24} className="hover:text-secondary transition-colors cursor-pointer" />
            <Icon name="Instagram" size={24} className="hover:text-secondary transition-colors cursor-pointer" />
            <Icon name="Twitter" size={24} className="hover:text-secondary transition-colors cursor-pointer" />
          </div>
          <p className="text-white/60 text-sm mt-6">© 2024 Турагентство "Глобус". Все права защищены.</p>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default Index;