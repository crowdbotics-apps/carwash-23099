from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    DocumentViewSet,
    UserProfileViewSet,
    DriverProfileViewSet,
    InviteCodeViewSet,
    NotificationViewSet,
)

router = DefaultRouter()
router.register("userprofile", UserProfileViewSet)
router.register("document", DocumentViewSet)
router.register("notification", NotificationViewSet)
router.register("invitecode", InviteCodeViewSet)
router.register("driverprofile", DriverProfileViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
