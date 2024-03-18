from django.contrib import admin
from django.urls import path, include
from alarm_iot.arduino import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('gas/', views.gas_data_view, name='gas_data'),
    path('people/', views.people_data_view, name='people_data'),
]
